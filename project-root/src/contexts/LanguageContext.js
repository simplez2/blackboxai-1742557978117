import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translationData from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // Initialize translations based on current language
  const [translations, setTranslations] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return translationData[savedLanguage] || translationData.en;
  });

  // Update translations whenever language changes
  useEffect(() => {
    setTranslations(translationData[language]);
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = useCallback((key) => {
    return translations[key] || key;
  }, [translations]);

  const value = {
    language,
    setLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}