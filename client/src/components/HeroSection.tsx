/* Hero Section — 16:9 rounded video, text centered-left */

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="pt-8 pb-16 px-6" style={{ background: "#F8F8F7" }}>
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9", maxHeight: "70vh" }}>
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/showreel.mp4" type="video/mp4" />
        </video>

        {/* Text — vertically centered, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-y-0 left-8 lg:left-12 flex flex-col justify-center z-10"
        >
          <h1
            className="text-2xl lg:text-4xl font-bold leading-snug mb-2"
            style={{ color: "#FFFFFF" }}
          >
            {t.hero.tagline}
            <br />
            {t.hero.tagline2}
          </h1>
          <p
            className="text-sm lg:text-base"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {t.hero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
