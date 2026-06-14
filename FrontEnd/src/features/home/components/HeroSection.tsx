import { useNavigate } from "react-router-dom";
import { PillButton } from "@/components/marketing/pill-button";
import { FaArrowRight } from "react-icons/fa";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] w-full overflow-x-hidden bg-xone-hero-gradient px-4 py-12 sm:min-h-[95vh] sm:px-6 sm:py-16 lg:px-8"
    >
      <img
        src="/assets/images/shape1.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-48 top-0 hidden w-[34%] max-w-md object-cover opacity-80 sm:block lg:-right-96"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.4))",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.4))",
        }}
      />
      <img
        src="/assets/images/shape2.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 hidden w-[23%] max-w-xs object-cover opacity-80 sm:block lg:-left-48"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.4))",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.4))",
        }}
      />
      <div className="mx-auto mt-12 max-w-7xl text-center sm:mt-20">
        <h1
          id="hero-heading"
          className="mb-4 text-3xl font-extrabold text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          We design and build
        </h1>
        <p className="mb-4 text-3xl font-bold text-xone-cyan sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          digital solutions
        </p>
        <p className="mb-8 text-3xl font-bold text-white sm:mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          that power growth
        </p>
        <p className="text-base font-medium text-xone-light sm:text-lg md:text-xl lg:text-2xl">
          From UI/UX to full-scale systems, we deliver modern applications
        </p>
        <p className="mt-2 text-base font-medium text-xone-light/90 sm:text-lg md:text-xl lg:text-2xl">
          tailored to your business needs. Transform your ideas into
        </p>
        <p className="mt-2 text-base font-medium text-xone-light/90 sm:text-lg md:text-xl lg:text-2xl">
          powerful digital experiences.
        </p>
        <div className="mt-8 flex items-center justify-center sm:mt-12">
          <PillButton
            size="lg"
            variant="secondary"
            className="gap-2 bg-white px-6 py-3 text-xone-navy hover:bg-xone-light sm:px-8 sm:py-4"
            onClick={() => navigate("/contact")}
          >
            Talk to our Team
            <FaArrowRight className="ml-2" aria-hidden />
          </PillButton>
        </div>
      </div>
    </section>
  );
}
