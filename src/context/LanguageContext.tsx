'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { RootTranslations } from '@/types/translations';

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  t: (key: string) => string;
  isLoading: boolean;
  translations: RootTranslations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper functions for localStorage
const getStoredLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('afira-language') || 'fr';
  }
  return 'fr';
};

const setStoredLanguage = (language: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('afira-language', language);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(getStoredLanguage);
  const [translations, setTranslations] = useState<RootTranslations>({} as RootTranslations);
  const [isLoading, setIsLoading] = useState(true);

  // Custom setLanguage function that also saves to localStorage
  const updateLanguage = (newLanguage: string | ((prev: string) => string)) => {
    const actualLanguage = typeof newLanguage === 'function' ? newLanguage(language) : newLanguage;
    setLanguage(actualLanguage);
    setStoredLanguage(actualLanguage);
  };

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await import(`../translations/${language}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English if the language file fails to load
        if (language !== 'en') {
          const fallbackResponse = await import(`../translations/en.json`);
          setTranslations(fallbackResponse.default);
        }
      }
      setIsLoading(false);
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    return key.split('.').reduce((obj: unknown, k: string) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, translations as unknown) as string || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t, isLoading, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}; 