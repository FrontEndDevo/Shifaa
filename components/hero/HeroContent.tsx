// Components:
import { CTAButtons } from "./CTAButtons";

// Next Intl:
import { useTranslations } from "next-intl";

const HeroContent = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-4 text-center lg:px-0">
      <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl lg:tracking-tight xl:text-6xl 2xl:max-w-[40%] 2xl:text-8xl dark:text-white rtl:font-sans rtl:leading-snug rtl:lg:tracking-normal">
        {t("headline")}
      </h1>

      <p className="font-serif text-sm leading-normal text-slate-600 lg:max-w-[80%] lg:tracking-tight xl:text-base 2xl:max-w-[60%] dark:text-slate-300 rtl:font-sans rtl:lg:tracking-normal">
        {t("description")}
      </p>

      <CTAButtons />
    </div>
  );
};

export default HeroContent;
