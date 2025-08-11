import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('de');

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? (localStorage.getItem('theme') || '') : '';
    if (storedTheme) {
      setTheme(storedTheme);
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', storedTheme);
      }
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
    setLanguage(prev => (prev === 'de' ? 'en' : 'de'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
