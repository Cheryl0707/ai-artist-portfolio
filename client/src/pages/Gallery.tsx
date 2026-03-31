import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE = "/images/projects/aigc-footages";

const artworks = [
  { id: 1, src: `${BASE}/aigc-01.png`, w: 2698, h: 1506 },
  { id: 2, src: `${BASE}/aigc-02.png`, w: 2698, h: 1506 },
  { id: 3, src: `${BASE}/aigc-03.png`, w: 2698, h: 1505 },
  { id: 4, src: `${BASE}/aigc-04.png`, w: 1920, h: 480 },
  { id: 5, src: `${BASE}/aigc-05.png`, w: 2548, h: 4564 },
  { id: 6, src: `${BASE}/aigc-06.png`, w: 3579, h: 2014 },
  { id: 7, src: `${BASE}/aigc-07.png`, w: 3579, h: 2014 },
  { id: 8, src: `${BASE}/aigc-08.png`, w: 1824, h: 2336 },
  { id: 9, src: `${BASE}/aigc-09.png`, w: 1744, h: 2336 },
  { id: 10, src: `${BASE}/aigc-10.png`, w: 1924, h: 1078 },
];

// Split into two rows with a mix of aspect ratios
const row1 = [artworks[0], artworks[5], artworks[4], artworks[9], artworks[2]];
const row2 = [artworks[7], artworks[1], artworks[6], artworks[3], artworks[8]];

const ROW_HEIGHT = 320;

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F8F8F7" }}
    >
      {/* Title */}
      <div className="px-6 pt-8 pb-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-wide"
          style={{ color: "#2672E4" }}
        >
          /Gallery
        </motion.p>
      </div>

      {/* Dual-row auto-scrolling gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center gap-4 overflow-hidden pb-12"
      >
        <MarqueeRow images={row1} direction="left" duration={30} />
        <MarqueeRow images={row2} direction="right" duration={35} />
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
  const items = [...images, ...images];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
      }}
    >
      <div
        className="flex gap-4 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {items.map((art, i) => {
          const aspectRatio = art.w / art.h;
          const width = Math.round(ROW_HEIGHT * aspectRatio);

          return (
            <div
              key={`${art.id}-${i}`}
              className="flex-shrink-0 overflow-hidden rounded-lg"
              style={{ width: `${width}px`, height: `${ROW_HEIGHT}px` }}
            >
              <img
                src={art.src}
                alt={`AIGC artwork ${art.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
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
