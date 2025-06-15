'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get the language from the URL path
    const pathLang = pathname.split('/')[1];
    if (pathLang === 'fr' || pathLang === 'en') {
      setLanguage(pathLang);
    }
  }, [pathname]);

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    // Update the URL to reflect the new language
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 