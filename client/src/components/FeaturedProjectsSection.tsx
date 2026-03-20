/* Featured Projects Section — 4 hand-picked projects for the home page */

import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { getFeaturedHomeProjects, type Project } from "@/data/projects";
import { useLanguage, useBiText } from "@/contexts/LanguageContext";

export default function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const bt = useBiText();
  const featured = getFeaturedHomeProjects();

  return (
    <section className="relative pb-32 px-6" style={{ background: "#F8F8F7" }}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-medium tracking-widest uppercase mb-6"
        style={{ color: "#999999" }}
      >
        Featured Projects
      </motion.p>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featured.map((project, i) => (
          <FeaturedCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const bt = useBiText();
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="group block h-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3" style={{ background: "#EEEEEE" }}>
          <img
            src={project.coverImage}
            alt={bt(project.title)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.coverVideo ? "group-hover:opacity-0" : ""}`}
            style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
          />
          {project.coverVideo && project.coverVideo.endsWith(".gif") ? (
            <img
              src={project.coverVideo}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : project.coverVideo ? (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <source src={project.coverVideo} type="video/mp4" />
            </video>
          ) : null}
          {project.status === "wip" && (
            <span
              className="absolute top-3 right-3 text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded-full"
              style={{ background: "#F8F8F7", color: "#999999", border: "1px solid #E5E5E4" }}
            >
              {t.projectDetail.inProgress}
            </span>
          )}
        </div>

        {/* Info */}
        <h3 className="text-base font-bold mb-1" style={{ color: "#000000" }}>
          {bt(project.title)}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
          {bt(project.description)}
        </p>
      </motion.div>
    </Link>
  );
}
