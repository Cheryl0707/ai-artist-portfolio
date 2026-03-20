import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

export default function Work() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F8F7" }}>
      {/* Header with intro */}
      <div className="px-6 pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
          style={{ color: "#000000" }}
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm leading-relaxed max-w-2xl"
          style={{ color: "#666666" }}
        >
          A collection of work across virtual production, AI-driven pre-visualization, automation workflows, and creative coding — blending emerging technology with visual storytelling.
        </motion.p>
      </div>

      <ProjectsSection />
    </div>
  );
}
