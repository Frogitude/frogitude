import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? (localStorage.getItem('theme') || '') : '';
    const storedLang = typeof window !== 'undefined' ? (localStorage.getItem('language') || '') : '';
    if (storedTheme) {
      setTheme(storedTheme);
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', storedTheme);
      }
    }
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'de' ? 'en' : 'de';
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', next);
      }
      return next;
    });
  };

  // Persist language when changed externally via setLanguage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
