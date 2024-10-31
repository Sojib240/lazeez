"use client";

// TranslatorContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const TranslatorContext = createContext();

// Create a provider component
export const TranslatorProvider = ({ children }) => {
  // state declaration
  const [isArabic, setIsArabic] = useState(false);
  const [isMalay, setIsMalay] = useState(false);

  // Arab lang toggle function
  const toggleArabicLanguage = () => {
    setIsArabic((prevIsArabic) => !prevIsArabic);
    setIsMalay(false);
  };
  // Malay lang toggle function
  const toggleMalayLanguage = () => {
    setIsMalay((prevIsMalay) => !prevIsMalay);
    setIsArabic(false);
  };

  return (
    <TranslatorContext.Provider
      value={{
        isArabic,
        isMalay,
        setIsArabic,
        setIsMalay,
        toggleArabicLanguage,
        toggleMalayLanguage,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};

// Custom hook to use the Translator context
export const useTranslator = () => {
  return useContext(TranslatorContext);
};
