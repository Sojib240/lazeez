"use client";
import { useTranslator } from "@/utils/translatorContext";

const Translator = () => {
  const { isArabic, isMalay, toggleArabicLanguage, toggleMalayLanguage } =
    useTranslator();
  return (
    <div className="space-x-3">
      <button
        className="border rounded px-2 sm:px-3 p-2 text-white hover:border-green-300  "
        onClick={toggleArabicLanguage}
      >
        {isArabic ? "Switch to English" : "تبديل إلى العربية"}
      </button>
      <button
        className="border rounded px-2 sm:px-3 p-2 text-white hover:border-green-300 -150 "
        onClick={toggleMalayLanguage}
      >
        {isMalay ? "Switch to English" : "Switch To Malay"}
      </button>
    </div>
  );
};

export default Translator;
