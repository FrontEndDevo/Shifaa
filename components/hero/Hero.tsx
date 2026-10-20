"use client";

// Shadcn UI:
import { TooltipProvider } from "@/components/ui/tooltip";

// Components:
import HeroContent from "./HeroContent";
import HeroTestimonials from "./HeroTestimonials";
import HeroBackground from "./HeroBackground";

// Constants
import { backgroundPattern } from "@/constants/HeroHome";

const Hero = () => {
  return (
    <section
      style={backgroundPattern}
      className="relative h-fit lg:h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 lg:overflow-hidden"
    >
      <HeroBackground />
      <div className="relative flex flex-col items-center justify-center h-full w-full pt-16 pb-10 lg:px-[10%] z-40 gap-8">
        <HeroContent />

        <TooltipProvider>
          <HeroTestimonials />
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Hero;
