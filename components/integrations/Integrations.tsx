// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Hospital } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Constants:
import { INTEGRATIONS } from "@/constants/Integrations";

// Components:
import SectionHeading from "../common/SectionHeading";

const Integrations = () => {
  const t = useTranslations("Integrations");

  return (
    <section className="mx-auto flex max-w-7xl flex-col px-6 py-12 sm:py-14">
      <SectionHeading
        icon={Hospital}
        heading={t("heading")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRATIONS.map((integration) => (
          <div
            className="relative flex flex-col items-start overflow-hidden border border-line bg-card"
            key={integration.id}
          >
            <div className="absolute inset-x-0 top-7 h-9.5 border-y border-dashed border-line bg-card/30" />
            <div className="absolute inset-y-0 start-7 w-9.5 border-x border-dashed border-line bg-card/30" />

            <div className="relative isolate flex items-start justify-between gap-5 p-6">
              <div className="w-fit shrink-0 rounded-3xl bg-transparent p-1">
                <div className="relative border border-line bg-page">
                  <Image
                    src={integration.img}
                    alt={integration.name}
                    width={48}
                    height={48}
                    className="absolute inset-0 size-9 blur-[36px]"
                  />
                  <Image
                    src={integration.img}
                    alt={integration.name}
                    width={48}
                    height={48}
                    className="size-9"
                  />
                </div>
              </div>
              <div>
                <h3 className="py-2 text-xl font-medium">{integration.name}</h3>
                <p className="mt-4 mb-2 text-pretty tracking-normal text-faint">
                  {t(`items.${integration.id}`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
