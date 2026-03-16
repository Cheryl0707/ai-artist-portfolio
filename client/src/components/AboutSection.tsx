/* Light Theme About Section — Clean layout with avatar and bio */

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AVATAR = "/ME.JPG";

const tools = [
  "Unreal Engine", "ComfyUI", "Stable Diffusion", "ControlNet",
  "Runway ML", "Midjourney", "DALL-E 3", "Adobe Firefly",
];

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-32" style={{ background: "#F8F8F7", borderTop: "1px solid #E5E5E4" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={AVATAR}
                alt="Nova"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-sm font-medium tracking-wide mb-8" style={{ color: "#2672E4" }}>
              {t.about.sectionLabel}
            </p>

            <div className="space-y-6 mb-10 text-lg leading-relaxed" style={{ color: "#666666" }}>
              {t.about.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="text-sm font-medium tracking-wide mb-4" style={{ color: "#2672E4" }}>
                {t.about.toolsLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-4 py-2"
                    style={{
                      border: "1px solid #E5E5E4",
                      color: "#666666",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
