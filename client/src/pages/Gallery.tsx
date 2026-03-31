import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const artworks = [
  {
    id: 1,
    title: "Cosmic Fractal",
    medium: "Stable Diffusion + Custom LoRA",
    year: "2024",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_1_62b72c64.jpg",
  },
  {
    id: 2,
    title: "Neon Metropolis",
    medium: "Midjourney v6 + Photoshop",
    year: "2024",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_2_a5b4b47e.jpg",
  },
  {
    id: 3,
    title: "Digital Duality",
    medium: "ComfyUI + ControlNet",
    year: "2025",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_3_74c096ee.jpg",
  },
  {
    id: 4,
    title: "Bioluminescent Realm",
    medium: "DALL-E 3 + Topaz AI",
    year: "2025",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_4_1c2cf7d1.jpg",
  },
  {
    id: 5,
    title: "Sacred Algorithm",
    medium: "Stable Diffusion XL",
    year: "2025",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663415385285/SdaUSv5BCkW6ExjpUKC2oA/ai_art_5_25461da3.jpg",
  },
];

// Split artworks into two rows
const row1 = artworks;
const row2 = [...artworks].reverse();

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F8F8F7" }}
    >
      {/* Title */}
      <div className="px-6 pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
          style={{ color: "#000000" }}
        >
          {t.gallery.title}
        </motion.h1>
      </div>

      {/* Dual-row auto-scrolling gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center gap-4 overflow-hidden pb-12"
      >
        {/* Row 1: scrolls left */}
        <MarqueeRow images={row1} direction="left" duration={35} />

        {/* Row 2: scrolls right */}
        <MarqueeRow images={row2} direction="right" duration={40} />
      </motion.div>
    </div>
  );
}

function MarqueeRow({
  images,
  direction,
  duration,
}: {
  images: typeof artworks;
  direction: "left" | "right";
  duration: number;
}) {
  // Duplicate images for seamless loop
  const items = [...images, ...images];

  return (
    <div
      className="group relative overflow-hidden"
      style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)" }}
    >
      <div
        className="flex gap-4 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {items.map((art, i) => (
          <div
            key={`${art.id}-${i}`}
            className="relative flex-shrink-0 overflow-hidden rounded-lg"
            style={{ width: "calc((100vw - 220px - 5rem) / 3.5)", height: "280px" }}
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#FFFFFF" }}
                >
                  {art.title}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {art.medium}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
