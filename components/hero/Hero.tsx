"use client";

// Components:
import HeroContent from "./HeroContent";
import HeroTestimonials from "./HeroTestimonials";
import BottomSection from "./BottomSection";
import HeroBackground from "./HeroBackground";

// Types:
import { HeroContentProps } from "@/types/hero.types";

// Styles:
import { backgroundPattern, styles } from "./styles";

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

      <section style={backgroundPattern} className={styles.section}>
        <HeroBackground />
        <div className={styles.mainContainer}>
          <HeroContent
            headline={headline}
            description={description}
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
          />
          <HeroTestimonials />
          <BottomSection />
        </div>
      </section>
    </>
  );
};

export default Hero;
