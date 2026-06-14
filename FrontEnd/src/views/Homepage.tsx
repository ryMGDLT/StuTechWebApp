import { Footer } from "@/components/Footer";
import { CtaSection } from "@/features/home/components/CtaSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { MissionSection } from "@/features/home/components/MissionSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { ServicesSection } from "@/features/home/components/ServicesSection";
import { ValuePropsSection } from "@/features/home/components/ValuePropsSection";
import "@/features/home/styles/home-swiper.css";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <hr className="border border-white" />
      <ValuePropsSection />
      <hr className="border-white" />
      <ProcessSection />
      <hr className="border-white" />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Homepage;
