/* Light Theme Home Page with Ethereal Shadow Effects */

import HeroSection from "@/components/HeroSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import GalleryMarquee from "@/components/GalleryMarquee";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#F8F8F7" }}>
      <HeroSection />
      <FeaturedProjectsSection />
      <GalleryMarquee />
    </div>
  );
}
