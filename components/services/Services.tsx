// Lucide Icons:
import { ArrowRight, HeartCrack } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { cn } from "@/lib/utils";

// Customised Next Components:
import { Link } from "@/i18n/navigation";

// Constants:
import { OUR_SERVICES, SERVICE_COLORS } from "@/constants/OurServices";

// Components:
import SectionHeading from "../common/SectionHeading";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section className="container py-20 text-center">
      <SectionHeading
        icon={HeartCrack}
        heading={t("heading")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {OUR_SERVICES.map((service) => {
          const ServiceIcon = service.icon;

          return (
            <div
              key={service.id}
              className="group rounded-xl border border-line bg-card p-4"
            >
              <ServiceIcon
                className={cn(
                  "h-12 w-12 rounded-xl p-4 transition duration-150",
                  SERVICE_COLORS[service.coloring],
                )}
              />

              <p className="my-10 text-sm text-faint">
                {t(`items.${service.id}`)}
              </p>

              <Link
                href={service.link}
                className="flex w-fit items-center gap-2 font-bold text-red-700 dark:text-red-400"
              >
                {t(service.action)}
                <ArrowRight className="h-5 w-5 transition duration-150 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
