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
  { id: 11, src: `${BASE}/aigc-11.jpeg`, w: 1376, h: 768 },
  { id: 12, src: `${BASE}/aigc-12.png`, w: 2581, h: 1080 },
  { id: 13, src: `${BASE}/aigc-13.png`, w: 2080, h: 980 },
  { id: 14, src: `${BASE}/aigc-14.png`, w: 1999, h: 1080 },
  { id: 15, src: `${BASE}/aigc-15.png`, w: 607, h: 1080 },
  { id: 16, src: `${BASE}/aigc-16.png`, w: 607, h: 1080 },
  { id: 17, src: `${BASE}/aigc-17.png`, w: 607, h: 1080 },
  { id: 18, src: `${BASE}/aigc-18.png`, w: 2107, h: 1080 },
  { id: 19, src: `${BASE}/aigc-19.png`, w: 1920, h: 1080 },
  { id: 20, src: `${BASE}/aigc-20.png`, w: 1921, h: 1080 },
  { id: 21, src: `${BASE}/aigc-21.png`, w: 2752, h: 1536 },
  { id: 22, src: `${BASE}/aigc-22.png`, w: 2752, h: 1536 },
  { id: 23, src: `${BASE}/aigc-23.png`, w: 1935, h: 1080 },
  { id: 24, src: `${BASE}/aigc-24.png`, w: 1884, h: 804 },
  { id: 25, src: `${BASE}/aigc-25.png`, w: 1884, h: 804 },
  { id: 26, src: `${BASE}/aigc-26.png`, w: 1884, h: 804 },
  { id: 27, src: `${BASE}/aigc-27.png`, w: 1884, h: 804 },
  { id: 28, src: `${BASE}/aigc-28.png`, w: 1884, h: 804 },
  { id: 29, src: `${BASE}/aigc-29.png`, w: 1884, h: 804 },
  { id: 30, src: `${BASE}/aigc-30.png`, w: 1884, h: 804 },
  { id: 31, src: `${BASE}/aigc-31.png`, w: 1884, h: 804 },
  { id: 32, src: `${BASE}/Forest-High-Res-Still-Image.png`, w: 1920, h: 480 },
  { id: 33, src: `${BASE}/u2383428882_a_cinematic_high_angle_extreme_close_up_shot_of_t_44616774-c04d-4fee-b426-92194fa7a073_0.png`, w: 1924, h: 1078 },
];

// Split into two rows with mixed aspect ratios for visual variety
const row1 = [
  artworks[0], artworks[5], artworks[14], artworks[10], artworks[12],
  artworks[20], artworks[7], artworks[18], artworks[3], artworks[23],
  artworks[2], artworks[16], artworks[11], artworks[21], artworks[8],
  artworks[25], artworks[32],
];
const row2 = [
  artworks[15], artworks[1], artworks[13], artworks[9], artworks[24],
  artworks[6], artworks[19], artworks[4], artworks[22], artworks[17],
  artworks[26], artworks[27], artworks[28], artworks[29], artworks[30],
  artworks[31],
];

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
        <MarqueeRow images={row1} direction="left" duration={60} />
        <MarqueeRow images={row2} direction="right" duration={66} />
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
      style={{}}
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
