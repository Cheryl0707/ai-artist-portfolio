import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const [location] = useLocation();
  const { t } = useLanguage();

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen w-[220px] flex-col px-6 py-8 overflow-y-auto z-40"
      style={{ background: "#F8F8F7", borderRight: "1px solid #E5E5E4" }}
    >
      {/* Name */}
      <Link href="/">
        <span
          className="block mb-4 text-lg font-bold tracking-tight cursor-pointer"
          style={{ color: "#000000" }}
        >
          Cheryl Liu
        </span>
      </Link>

      {/* Navigation links */}
      <nav className="flex-1 space-y-1">
        <SidebarLink href="/about" label={t.nav.about} currentPath={location} />
        <SidebarLink href="/digital-twin" label={t.nav.digitalTwin} currentPath={location} />
        <SidebarLink href="/work" label="Projects" currentPath={location} />
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
      </nav>

      {/* Language switcher + Copyright */}
      <div className="mt-auto pt-6">
        <LanguageSwitcher />
        <p className="text-[11px] mt-2" style={{ color: "#999999" }}>
          {t.nav.copyright}
        </p>
      </div>
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
