// Components:
import { CTAButtons } from "./CTAButtons";

// Types
import { HeroContentProps } from "@/types/hero.types";

const HeroContent = ({ headline, description }: HeroContentProps) => {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-center gap-6 text-center">
      <h1
        className={`font-serif lg:tracking-tight 2xl:max-w-[40%] text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl 
            font-semibold text-slate-900 dark:text-white leading-tight`}
      >
        {headline}
      </h1>

      <p
        className={`font-serif lg:tracking-tight text-slate-600 dark:text-slate-300 text-sm xl:text-base 
               lg:max-w-[80%] 2xl:max-w-[60%] leading-normal`}
      >
        {description}
      </p>

      <CTAButtons />
    </div>
  );
};

export default HeroContent;
