"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/navigation";

import { translateText, type Locale } from "@/lib/translations";
export { translateText } from "@/lib/translations";
export type { Locale } from "@/lib/translations";

const LOCALE_STORAGE_KEY = "prima-services-locale";
const LOCALE_CHANGE_EVENT = "prima-services-locale-change";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translate: (text: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getStoredLocale(): Locale {
  const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return savedLocale === "id" || savedLocale === "en" ? savedLocale : "en";
}

function subscribeToLocaleChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onChange);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocaleChanges,
    getStoredLocale,
    () => "en",
  );
  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    document.cookie = `${LOCALE_STORAGE_KEY}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
    router.refresh();
  }, [router]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [locale]);

  const translate = useCallback(
    (text: string) => translateText(text, locale),
    [locale],
  );
  const value = useMemo(
    () => ({ locale, setLocale, translate }),
    [locale, setLocale, translate],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider.");
  }
  return context;
}
