import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
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
                <span
                  className="block text-lg font-bold tracking-tight cursor-pointer"
                  style={{ color: "#000000" }}
                >
                  Cheryl Liu
                </span>
              </Link>
            </SheetTitle>

            {/* Navigation links */}
            <nav className="flex-1 space-y-1">
              <MobileLink href="/about" label={t.nav.about} currentPath={location} onNavigate={close} />
              <MobileLink href="/digital-twin" label={t.nav.digitalTwin} currentPath={location} onNavigate={close} />
              <MobileLink href="/work" label="Projects" currentPath={location} onNavigate={close} />
              <MobileLink href="/gallery" label={t.nav.gallery} currentPath={location} onNavigate={close} />
              <a
                href="https://drive.google.com/file/d/1WN7YtcqRA96YgYF6yXwSSd8eGnN203UE/view?usp=sharing"
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
            </nav>

            {/* Language switcher + Copyright */}
            <div className="mt-auto pt-6">
              <LanguageSwitcher />
              <p className="text-[11px] mt-2" style={{ color: "#999999" }}>
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
        className="block text-sm py-1 cursor-pointer transition-colors"
        style={{ color: isActive ? "#2672E4" : "#666666" }}
      >
        {label}
      </span>
    </Link>
  );
}
