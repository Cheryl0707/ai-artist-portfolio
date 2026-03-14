/* Light Theme Navbar — Clean, simple, elegant with blue accents */

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["gallery", "about", "process", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "#F8F8F7", borderBottom: "1px solid #E5E5E4" }}>
      <nav className="container flex items-center justify-between py-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); if (location !== "/") { setLocation("/"); } window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-lg font-bold tracking-tight"
          style={{ color: "#000000" }}
        >
          Cheryl Liu
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#2672E4" : "#666666",
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ color: "#000000" }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{ borderTop: "1px solid #E5E5E4", background: "#F8F8F7" }}
        >
          <ul className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium w-full text-left py-2"
                  style={{ color: "#666666" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
