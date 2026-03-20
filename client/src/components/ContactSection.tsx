/* Light Theme Contact Section — Simple form and social links */

import { motion } from "framer-motion";
import { Linkedin, Mail, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", handle: "Cheryl Liu", href: "https://www.linkedin.com/in/cheryl-liu-3928ba1ab" },
    { icon: Mail, label: t.contact.emailLabel, handle: "cherylrj0707@gmail.com", href: "mailto:cherylrj0707@gmail.com" },
    { icon: FileText, label: t.nav.resume, handle: t.contact.resumeHandle, href: "https://drive.google.com/file/d/1kC-ysU_-9jNE6NgyOyVGjIBr8-VdRX7L/view?usp=sharing" },
  ];
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success(t.contact.successToast, {
        style: {
          background: "#FFFFFF",
          border: "1px solid #E5E5E4",
          color: "#000000",
        },
      });
    }, 1500);
  };

  const inputStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E5E4",
    color: "#000000",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <section id="contact" className="py-32" style={{ background: "#F8F8F7", borderTop: "1px solid #E5E5E4" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-wide mb-8" style={{ color: "#2672E4" }}>
              {t.contact.sectionLabel}
            </p>
            <p className="text-lg leading-relaxed mb-12" style={{ color: "#666666" }}>
              {t.contact.intro}
            </p>

            {/* Social */}
            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-opacity hover:opacity-70"
                  style={{ color: "#666666" }}
                >
                  <Icon size={18} style={{ color: "#2672E4" }} />
                  <div>
                    <p className="text-sm" style={{ color: "#999999" }}>
                      {label}
                    </p>
                    <p className="text-base font-medium" style={{ color: "#000000" }}>
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#666666" }}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#666666" }}>
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#666666" }}>
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#666666" }}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 font-medium text-sm transition-all duration-200 disabled:opacity-60"
                style={{
                  background: sending ? "#E5E5E4" : "#2672E4",
                  color: sending ? "#666666" : "#FFFFFF",
                  border: "1px solid #2672E4",
                }}
              >
                {sending ? t.contact.sendingButton : t.contact.sendButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
