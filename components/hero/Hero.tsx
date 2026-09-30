"use client";

// Shadcn UI:
import { TooltipProvider } from "@/components/ui/tooltip";

// Components:
import HeroContent from "./HeroContent";
import HeroTestimonials from "./HeroTestimonials";
import HeroBackground from "./HeroBackground";

// Types:
import { HeroContentProps } from "@/types/hero.types";

// Styles:
const backgroundPattern = {
  backgroundImage: `
    repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
    radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
  `,
  backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
};

const Hero = ({
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
}: HeroContentProps) => {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        style={backgroundPattern}
        className="relative h-fit lg:h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 lg:overflow-hidden"
      >
        <HeroBackground />
        <div className="relative flex flex-col items-center justify-center h-full w-full pt-16 pb-10 lg:px-[10%] z-40 gap-8">
          <HeroContent
            headline={headline}
            description={description}
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
          />

          <TooltipProvider>
            <HeroTestimonials />
          </TooltipProvider>
        </div>
      </section>
    </>
  );
};

export default Hero;
