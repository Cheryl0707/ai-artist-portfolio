/* Light Theme Footer */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12" style={{ background: "#F8F8F7", borderTop: "1px solid #E5E5E4" }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p style={{ color: "#999999" }}>{t.nav.copyright}</p>
      </div>
    </footer>
  );
}
