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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,6fr)] gap-8 items-start">
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

            <div className="space-y-4 mb-10 text-sm leading-relaxed" style={{ color: "#666666" }}>
              {t.about.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Experience & Education side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Experience */}
              <div>
                <p className="text-sm font-medium tracking-wide mb-6" style={{ color: "#2672E4" }}>
                  EXPERIENCE
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#000000" }}>Creative Technologist & AI Researcher</p>
                    <a href="https://the-garage.tv/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#2672E4] transition-colors" style={{ color: "#000000" }}>The Garage</a>
                    <p className="text-xs" style={{ color: "#999999" }}>Brooklyn, NY</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#000000" }}>Digital Content Creator</p>
                    <a href="https://www.bgmdancestudio.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#2672E4] transition-colors" style={{ color: "#000000" }}>BGM Dance Studio</a>
                    <p className="text-xs" style={{ color: "#999999" }}>Richmond, BC, Canada</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <p className="text-sm font-medium tracking-wide mb-6" style={{ color: "#2672E4" }}>
                  EDUCATION
                </p>
                <div className="space-y-5">
                  <div>
                    <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-[#2672E4] transition-colors" style={{ color: "#000000" }}>New York University (NYU)</a>
                    <p className="text-sm" style={{ color: "#000000" }}>MPS, Virtual Production</p>
                    <p className="text-xs" style={{ color: "#999999" }}>2024 – 2025</p>
                  </div>
                  <div>
                    <a href="https://www.sfu.ca/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-[#2672E4] transition-colors" style={{ color: "#000000" }}>Simon Fraser University (SFU)</a>
                    <p className="text-sm" style={{ color: "#000000" }}>BA, Interactive Art and Technology</p>
                    <p className="text-xs" style={{ color: "#999999" }}>2020 – 2023</p>
                  </div>
                </div>
              </div>
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
