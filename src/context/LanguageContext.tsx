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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<RootTranslations>({} as RootTranslations);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      const response = await import(`../translations/${language}.json`);
      setTranslations(response.default);
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
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}; 