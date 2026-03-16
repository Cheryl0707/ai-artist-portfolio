/* Projects Section — grouped by category, featured cards larger, video hover */

import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { categories, getProjectsByCategory, type Project } from "@/data/projects";
import { useLanguage, useBiText } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const bt = useBiText();
  return (
    <section id="projects" className="relative pb-32 px-6" style={{ background: "#F8F8F7" }}>
      {categories.map((cat) => {
        const catProjects = getProjectsByCategory(cat.id);
        if (catProjects.length === 0) return null;

        const featured = catProjects.find((p) => p.featured);
        const rest = catProjects.filter((p) => !p.featured);

        return (
          <div key={cat.id} id={`section-${cat.id}`} className="mb-16">
            {/* Category label */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-widest uppercase mb-6"
              style={{ color: "#999999" }}
            >
              {bt(cat.label)}
            </motion.p>

            {/* If there's a featured project: 1 large + rest small */}
            {featured ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2">
                  <ProjectCard project={featured} size="large" index={0} />
                </div>
                <div className="flex flex-col gap-5">
                  {rest.map((p, i) => (
                    <ProjectCard key={p.id} project={p} size="small" index={i + 1} />
                  ))}
                </div>
              </div>
            ) : (
              /* Even grid for non-featured categories */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {catProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} size="normal" index={i} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function ProjectCard({
  project,
  size,
  index,
}: {
  project: Project;
  size: "large" | "normal" | "small";
  index: number;
}) {
  const { t } = useLanguage();
  const bt = useBiText();
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectClass =
    size === "large"
      ? "aspect-[16/10]"
      : size === "small"
        ? "aspect-[16/10]"
        : "aspect-[4/3]";

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

  const inner = (
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
      <div className={`relative overflow-hidden rounded-lg ${aspectClass} mb-3`} style={{ background: "#EEEEEE" }}>
        {/* Cover image */}
        <img
          src={project.coverImage}
          alt={bt(project.title)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.coverVideo ? "group-hover:opacity-0" : ""}`}
        />
        {/* Video overlay on hover */}
        {project.coverVideo && (
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
        )}
        {/* WIP badge */}
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
      <h3
        className={`font-bold mb-1 ${size === "large" ? "text-xl" : "text-base"}`}
        style={{ color: "#000000" }}
      >
        {bt(project.title)}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
        {bt(project.description)}
      </p>
    </motion.div>
  );

  return (
    <Link href={`/projects/${project.slug}`}>
      {inner}
    </Link>
  );
}
