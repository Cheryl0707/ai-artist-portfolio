import { useMemo } from "react";
import { Link, useLocation } from "wouter";
import { categories, getProjectsByCategory } from "@/data/projects";
import { useLanguage, useBiText } from "@/contexts/LanguageContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const [location] = useLocation();
  const { t } = useLanguage();
  const bt = useBiText();
  const isHome = location === "/";
  const sectionIds = useMemo(() => categories.map((c) => `section-${c.id}`), []);
  const activeSectionId = useScrollSpy(isHome ? sectionIds : []);
  const activeCatId = activeSectionId?.replace("section-", "") ?? null;

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen w-[220px] flex-col px-6 py-8 overflow-y-auto z-40"
      style={{ background: "#F8F8F7", borderRight: "1px solid #E5E5E4" }}
    >
      {/* Name + Avatar */}
      <Link href="/">
        <span
          className="flex items-center gap-2 mb-4 cursor-pointer"
        >
          <img
            src="/welcome/yay.png"
            alt="Cheryl Liu"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-tight" style={{ color: "#000000" }}>
            Cheryl Liu
          </span>
        </span>
      </Link>

      {/* Personal links */}
      <nav className="mb-4 space-y-1">
        <SidebarLink href="/about" label={t.nav.about} currentPath={location} />
        <a
          href="https://drive.google.com/file/d/1uQ4AufiVTlAWxBflYxHy84frrSmo3jj9/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm py-1 mt-[2px] transition-opacity hover:opacity-70"
          style={{ color: "#666666" }}
        >
          {t.nav.resume}
        </a>
        <a
          href="https://www.linkedin.com/in/cheryl-liu-3928ba1ab"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm py-1 transition-opacity hover:opacity-70"
          style={{ color: "#666666" }}
        >
          {t.nav.linkedin}
        </a>
        <LanguageSwitcher />
      </nav>

      {/* Category sections */}
      <nav className="flex-1 space-y-4">
        {categories.map((cat) => {
          const catProjects = getProjectsByCategory(cat.id, true);
          const isCatActive = isHome && activeCatId === cat.id;
          return (
            <div key={cat.id}>
              <p
                className="text-[11px] font-medium tracking-wide uppercase mb-2 transition-colors"
                style={{ color: isCatActive ? "#2672E4" : "#999999" }}
              >
                {bt(cat.label)}
              </p>
              <div className="space-y-1">
                {catProjects.map((project) => (
                  <SidebarLink
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    label={bt(project.title)}
                    currentPath={location}
                  />
                ))}
                {catProjects.length === 0 && (
                  <p className="text-xs italic" style={{ color: "#CCCCCC" }}>
                    {t.nav.comingSoon}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Copyright */}
      <p className="mt-auto pt-6 text-[11px]" style={{ color: "#999999" }}>
        {t.nav.copyright}
      </p>
    </aside>
  );
}

function SidebarLink({
  href,
  label,
  currentPath,
  scrollActive,
}: {
  href: string;
  label: string;
  currentPath: string;
  scrollActive?: boolean;
}) {
  const isActive = currentPath === href || scrollActive;
  return (
    <Link href={href}>
      <span
        className="block text-sm py-1 cursor-pointer transition-colors"
        style={{ color: isActive ? "#2672E4" : "#666666" }}
      >
        {label}
      </span>
    </Link>
  );
}
