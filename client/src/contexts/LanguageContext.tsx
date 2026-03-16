import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { BiText, Locale, Translations } from "@/i18n/types";
import { en } from "@/i18n/en";
import { zh } from "@/i18n/zh";

const translations: Record<Locale, Translations> = { en, zh };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "zh") return stored;
    return navigator.language.startsWith("zh") ? "zh" : "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function useBiText() {
  const { locale } = useLanguage();
  return useCallback(
    (text: string | BiText): string => {
      if (typeof text === "string") return text;
      return text[locale];
    },
    [locale],
  );
}
