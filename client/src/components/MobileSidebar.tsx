import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories, getProjectsByCategory } from "@/data/projects";
import { useLanguage, useBiText } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();
  const bt = useBiText();

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="fixed top-4 left-4 z-50 p-2 rounded-md"
            style={{ background: "#F8F8F7", border: "1px solid #E5E5E4", color: "#000000" }}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[260px] p-0"
          style={{ background: "#F8F8F7" }}
        >
          <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
            {/* Name */}
            <SheetTitle className="mb-4">
              <Link href="/" onClick={close}>
                <span className="flex items-center gap-2 cursor-pointer">
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
            </SheetTitle>

            {/* Personal links */}
            <nav className="mb-4 space-y-1">
              <MobileLink href="/about" label={t.nav.about} currentPath={location} onNavigate={close} />
              <a
                href="https://drive.google.com/file/d/1uQ4AufiVTlAWxBflYxHy84frrSmo3jj9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm py-1 mt-[2px] transition-opacity hover:opacity-70"
                style={{ color: "#666666" }}
                onClick={close}
              >
                {t.nav.resume}
              </a>
              <a
                href="https://www.linkedin.com/in/cheryl-liu-3928ba1ab"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm py-1 transition-opacity hover:opacity-70"
                style={{ color: "#666666" }}
                onClick={close}
              >
                {t.nav.linkedin}
              </a>
              <LanguageSwitcher />
            </nav>

            {/* Category sections */}
            <nav className="flex-1 space-y-4">
              {categories.map((cat) => {
                const catProjects = getProjectsByCategory(cat.id, true);
                return (
                  <div key={cat.id}>
                    <p
                      className="text-[11px] font-medium tracking-wide uppercase mb-2"
                      style={{ color: "#999999" }}
                    >
                      {bt(cat.label)}
                    </p>
                    <div className="space-y-1">
                      {catProjects.map((project) => (
                        <MobileLink
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          label={bt(project.title)}
                          currentPath={location}
                          onNavigate={close}
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MobileLink({
  href,
  label,
  currentPath,
  onNavigate,
}: {
  href: string;
  label: string;
  currentPath: string;
  onNavigate: () => void;
}) {
  const isActive = currentPath === href;
  return (
    <Link href={href} onClick={onNavigate}>
      <span
        className="block text-sm py-1 cursor-pointer transition-colors"
        style={{ color: isActive ? "#2672E4" : "#666666" }}
      >
        {label}
      </span>
    </Link>
  );
}
