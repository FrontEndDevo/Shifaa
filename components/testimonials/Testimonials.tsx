// Next Components:
import Image from "next/image";

// Lucide Icons:
import { NotebookPen } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Avatar, AvatarFallback } from "../ui/avatar";

// Constants:
import { PATIENTS_TESTIMONIALS } from "@/constants/Testimonials";

// Utilities:
import { getInitials } from "@/lib/utils";

// Components:
import SectionHeading from "../common/SectionHeading";

const Testimonials = () => {
  const t = useTranslations("Testimonials");

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
      <SectionHeading
        icon={NotebookPen}
        heading={t("heading")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATIENTS_TESTIMONIALS.map(({ id, avatar }) => {
          const name = t(`items.${id}.name`);

          return (
            <div
              className="relative flex flex-col rounded-lg border border-line bg-card/70 px-5 pt-10 pb-3"
              key={id}
            >
              <span className="absolute top-2 start-4 font-satoshi text-8xl text-main/30">
                &ldquo;
              </span>

              <p className="grow py-6 text-lg font-medium">
                {t(`items.${id}.testimonial`)}
              </p>

              <div className="flex items-center gap-3 px-5 py-3.5">
                <div className="flex items-center gap-3">
                  {avatar ? (
                    <Image
                      alt={name}
                      src={avatar}
                      className="h-10 w-10 rounded-full"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Avatar className="size-10">
                      <AvatarFallback className="bg-blue-600 text-xl font-medium text-white">
                        {getInitials(name)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-faint">{t(`items.${id}.role`)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
