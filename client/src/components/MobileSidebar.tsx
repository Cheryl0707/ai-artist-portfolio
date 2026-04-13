import { Menu } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
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
          <div className="flex flex-col h-full px-7 py-10 overflow-y-auto">
            {/* Name */}
            <SheetTitle className="mb-0">
              <Link href="/" onClick={close}>
                <span
                  className="block text-[22px] leading-tight cursor-pointer italic"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    color: "#000000",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Cheryl Liu
                </span>
              </Link>
            </SheetTitle>
            <p
              className="text-[11px] mt-1 tracking-wide uppercase"
              style={{ color: "#999999" }}
            >
              AI-Empowered Creative Technologist
            </p>

            {/* Divider */}
            <div className="mt-6 mb-6" style={{ height: "1px", background: "#E5E5E4" }} />

            {/* Internal navigation */}
            <nav className="flex-1">
              <div className="space-y-[2px]">
                <MobileLink href="/about" label={t.nav.about} currentPath={location} onNavigate={close} />
                <MobileLink href="/digital-twin" label={t.nav.digitalTwin} currentPath={location} onNavigate={close} />
                <MobileLink href="/work" label="Projects" currentPath={location} onNavigate={close} />
                <MobileLink href="/gallery" label="Gallery" currentPath={location} onNavigate={close} />
              </div>

              {/* Separator */}
              <div className="my-4" style={{ height: "1px", background: "#E5E5E4" }} />

              {/* External links */}
              <div className="space-y-[2px]">
                <a
                  href="https://drive.google.com/file/d/1WN7YtcqRA96YgYF6yXwSSd8eGnN203UE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-[13px] py-[6px] transition-colors duration-200"
                  style={{ color: "#888888" }}
                  onClick={close}
                >
                  <span>{t.nav.resume}</span>
                  <ArrowUpRight size={12} style={{ color: "#AAAAAA" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cheryl-liu-3928ba1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-[13px] py-[6px] transition-colors duration-200"
                  style={{ color: "#888888" }}
                  onClick={close}
                >
                  <span>{t.nav.linkedin}</span>
                  <ArrowUpRight size={12} style={{ color: "#AAAAAA" }} />
                </a>
              </div>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6">
              <LanguageSwitcher />
              <p className="text-[10px] mt-3 tracking-wide" style={{ color: "#BBBBBB" }}>
                {t.nav.copyright}
              </p>
            </div>
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
        className="relative flex items-center text-[13px] py-[6px] cursor-pointer transition-colors duration-200"
        style={{ color: isActive ? "#2672E4" : "#555555" }}
      >
        {/* Active indicator slash */}
        {isActive && (
          <span className="text-[13px]" style={{ color: "#2672E4" }}>/</span>
        )}
        {label}
      </span>
    </Link>
  );
}
