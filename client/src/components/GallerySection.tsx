/* Light Theme Gallery — Clean grid with simple hover effects */

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const artworks = [
  {
    id: 1,
    title: "Cosmic Fractal",
    medium: "Stable Diffusion + Custom LoRA",
    year: "2024",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_1_62b72c64.jpg",
  },
  {
    id: 2,
    title: "Neon Metropolis",
    medium: "Midjourney v6 + Photoshop",
    year: "2024",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_2_a5b4b47e.jpg",
  },
  {
    id: 3,
    title: "Digital Duality",
    medium: "ComfyUI + ControlNet",
    year: "2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_3_74c096ee.jpg",
  },
  {
    id: 4,
    title: "Bioluminescent Realm",
    medium: "DALL-E 3 + Topaz AI",
    year: "2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_4_1c2cf7d1.jpg",
  },
  {
    id: 5,
    title: "Sacred Algorithm",
    medium: "Stable Diffusion XL",
    year: "2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_5_25461da3.jpg",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  return (
    <section id="gallery" className="py-32" style={{ background: "#F8F8F7", borderTop: "1px solid #E5E5E4" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm font-medium tracking-wide mb-4" style={{ color: "#2672E4" }}>
            SELECTED WORKS
          </p>
          <h2 className="text-5xl font-bold mb-6" style={{ color: "#000000" }}>
            The Gallery
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
            Each piece is a unique exploration of latent space — where mathematical beauty meets artistic intention.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setSelected(art)}
              className="group cursor-pointer overflow-hidden aspect-square"
            >
              <div className="relative w-full h-full">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: "#000000" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#FFFFFF" }}>
                    {art.title}
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {art.medium}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.8)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>

              {/* Info */}
              <div className="md:w-80 flex flex-col justify-center" style={{ background: "#F8F8F7", padding: "2rem" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "#2672E4" }}>
                  {selected.year}
                </p>
                <h3 className="text-3xl font-bold mb-4" style={{ color: "#000000" }}>
                  {selected.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#666666" }}>
                  {selected.medium}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-0 right-0 md:-top-10 md:-right-10 w-10 h-10 flex items-center justify-center transition-opacity"
                style={{ color: "#FFFFFF" }}
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
