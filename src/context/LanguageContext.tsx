'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  t: (key: string) => string;
  isLoading: boolean;
  translations: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      const response = await import(`../locales/${language}.json`);
      setTranslations(response.default);
      setIsLoading(false);
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    return key.split('.').reduce((obj: any, k: string) => obj?.[k], translations as any) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 