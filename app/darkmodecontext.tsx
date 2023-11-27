'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the context value
type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

// Create the context with a default value
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: darkMode => {}
});

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  // Initialize state from localStorage, or default to false
  const [darkMode, setDarkMode] = useState<boolean>(
    () => document.body.classList.contains('dark') || false
  );

  useEffect(() => {
    // Update the dark mode class on the body tag when the state changes
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Save the state to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
