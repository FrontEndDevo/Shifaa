// Components:
import { CTAButtons } from "./CTAButtons";

// Types
import { HeroContentProps } from "@/types/hero.types";

// Google Fonts:
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HeroContent = ({
  headline,
  description,
  primaryButtonText,
  secondaryButtonText,
}: HeroContentProps) => {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-center gap-6 text-center">
      <h1
        className={`${playfairDisplay.className} 2xl:max-w-[40%] text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl 
            font-semibold text-slate-900 dark:text-white leading-tight`}
      >
        {headline}
      </h1>

      <p
        className={`${ibmPlexMono.className} text-slate-600 dark:text-slate-300 text-sm xl:text-base 
               lg:max-w-[80%] 2xl:max-w-[60%] leading-normal`}
      >
        {description}
      </p>

      <CTAButtons
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
      />
    </div>
  );
};

export default HeroContent;
