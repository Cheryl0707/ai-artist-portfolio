import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="block text-sm py-1 transition-opacity hover:opacity-70"
      style={{ color: "#666666" }}
      aria-label="Switch language"
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
