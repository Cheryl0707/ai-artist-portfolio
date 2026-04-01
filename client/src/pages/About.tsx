import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen" style={{ background: "#F8F8F7" }}>
      <div className="px-6 pt-8 pb-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-wide"
          style={{ color: "#2672E4" }}
        >
          {t.about.sectionLabel}
        </motion.p>
      </div>
      <AboutSection />
    </div>
  );
}
