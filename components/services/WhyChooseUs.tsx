// Lucide Icons:
import { Star } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { cn } from "@/lib/utils";

// Constants:
import {
  CHOOSE_COLORS,
  WHY_CHOOSE_US_DATA,
} from "@/constants/WhyChooseUsSection";

// Components:
import SectionHeading from "../common/SectionHeading";

const WhyChooseUs = () => {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="bg-card py-20 text-center">
      <SectionHeading
        icon={Star}
        heading={t("heading")}
        title={t("title")}
        description={t("description")}
      />

      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {WHY_CHOOSE_US_DATA.map((item) => {
          const ChooseIcon = item.icon;

          return (
            <div
              key={item.id}
              className="group rounded-xl bg-page p-4 transition duration-150 hover:-translate-y-5 hover:bg-line"
            >
              <ChooseIcon
                className={cn(
                  "mx-auto mb-4 h-14 w-14 rounded-xl p-4 transition duration-150",
                  CHOOSE_COLORS[item.coloring],
                )}
              />
              <h4>{t(`items.${item.id}.heading`)}</h4>

              <p className="my-6 text-sm text-faint">
                {t(`items.${item.id}.content`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
