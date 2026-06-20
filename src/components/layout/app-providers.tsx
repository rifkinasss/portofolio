"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemePreference = "light" | "dark" | "system";
export type LanguagePreference = "en" | "id";

type PreferencesContextValue = {
  theme: ThemePreference;
  language: LanguagePreference;
  setTheme: (theme: ThemePreference) => void;
  setLanguage: (language: LanguagePreference) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const storedTheme = window.localStorage.getItem("naslabs-theme");

    return storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
      ? storedTheme
      : "system";
  });
  const [language, setLanguageState] = useState<LanguagePreference>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const storedLanguage = window.localStorage.getItem("naslabs-language");

    return storedLanguage === "en" || storedLanguage === "id"
      ? storedLanguage
      : "en";
  });

  useEffect(() => {
    const applyTheme = () => {
      document.documentElement.dataset.theme =
        theme === "system" ? getSystemTheme() : theme;
      document.documentElement.dataset.themePreference = theme;
    };

    applyTheme();
    window.localStorage.setItem("naslabs-theme", theme);

    const media = window.matchMedia("(prefers-color-scheme: light)");
    media.addEventListener("change", applyTheme);

    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "id" ? "id" : "en";
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("naslabs-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme: setThemeState,
      setLanguage: setLanguageState,
    }),
    [language, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within AppProviders");
  }

  return context;
}
