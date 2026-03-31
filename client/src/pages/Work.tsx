import { motion } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection";

export default function Work() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F8F7" }}>
      {/* Header with intro */}
      <div className="px-6 pt-8 pb-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-wide"
          style={{ color: "#2672E4" }}
        >
          /Projects
        </motion.p>
      </div>

      <ProjectsSection />
    </div>
  );
}
