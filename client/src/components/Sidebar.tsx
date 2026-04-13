import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar() {
  const [location] = useLocation();
  const { t } = useLanguage();

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen w-[220px] flex-col px-7 py-10 overflow-y-auto z-40"
      style={{ background: "#F8F8F7", borderRight: "1px solid #E5E5E4" }}
    >
      {/* Name — editorial serif for character */}
      <Link href="/">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-[22px] leading-tight cursor-pointer italic"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            color: "#000000",
            letterSpacing: "-0.3px",
          }}
        >
          Cheryl Liu
        </motion.span>
      </Link>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[11px] mt-1 tracking-wide uppercase"
        style={{ color: "#999999" }}
      >
        AI-Empowered Creative Technologist
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 mb-6 origin-left"
        style={{ height: "1px", background: "#E5E5E4" }}
      />

      {/* Internal navigation */}
      <nav className="flex-1">
        <div className="space-y-[2px]">
          {[
            { href: "/about", label: t.nav.about },
            { href: "/digital-twin", label: t.nav.digitalTwin },
            { href: "/work", label: "Projects" },
            { href: "/gallery", label: "Gallery" },
          ].map((item, i) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              currentPath={location}
              index={i}
            />
          ))}
        </div>

        {/* Separator */}
        <div className="my-4" style={{ height: "1px", background: "#E5E5E4" }} />

        {/* External links */}
        <div className="space-y-[2px]">
          <ExternalLink
            href="https://drive.google.com/file/d/1WN7YtcqRA96YgYF6yXwSSd8eGnN203UE/view?usp=sharing"
            label={t.nav.resume}
            index={4}
          />
          <ExternalLink
            href="https://www.linkedin.com/in/cheryl-liu-3928ba1ab"
            label={t.nav.linkedin}
            index={5}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <LanguageSwitcher />
        <p className="text-[10px] mt-3 tracking-wide" style={{ color: "#BBBBBB" }}>
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
  index,
}: {
  href: string;
  label: string;
  currentPath: string;
  index: number;
}) {
  const isActive = currentPath === href;
  return (
    <Link href={href}>
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
        className="group relative flex items-center gap-2 text-[13px] py-[6px] cursor-pointer transition-all duration-300"
        style={{ color: isActive ? "#2672E4" : "#555555" }}
        whileHover={{ x: 3 }}
      >
        {/* Active indicator slash */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.2 }}
              className="text-[13px]"
              style={{ color: "#2672E4" }}
            >
              /
            </motion.span>
          )}
        </AnimatePresence>
        <span className="group-hover:text-[#2672E4] transition-colors duration-200">
          {label}
        </span>
      </motion.span>
    </Link>
  );
}

function ExternalLink({
  href,
  label,
  index,
}: {
  href: string;
  label: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
      className="group flex items-center gap-1 text-[13px] py-[6px] transition-all duration-200"
      style={{ color: "#888888" }}
      whileHover={{ x: 3, color: "#555555" }}
    >
      <span>{label}</span>
      <ArrowUpRight
        size={12}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: "#AAAAAA" }}
      />
    </motion.a>
  );
}
