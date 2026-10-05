// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Hospital } from "lucide-react";

// Types:
import { INTEGRATIONS } from "@/constants/Integrations";

// Components:
import SectionHeading from "../common/SectionHeading";

const Integrations = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col px-6 py-12 sm:py-14">
      <SectionHeading
        icon={Hospital}
        heading="Integrations"
        title="Everything connected in one place"
        desctiption="Connect your healthcare tools and services to make appointments, patient care, and everyday workflows simpler and more efficient."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRATIONS.map((integration) => (
          <div
            className="relative flex flex-col items-start overflow-hidden border bg-card"
            key={integration.title}
          >
            <div className="absolute inset-x-0 top-7 h-9.5 border-y border-dashed bg-muted/30" />
            <div className="absolute inset-y-0 left-7 w-9.5 border-x border-dashed bg-muted/30" />

            <div className="relative isolate flex items-start justify-between gap-5 p-6">
              <div className="w-fit shrink-0 rounded-3xl bg-transparent p-1">
                <div className="relative border bg-background">
                  <Image
                    src={integration.img}
                    alt={integration.title}
                    width={48}
                    height={48}
                    className="absolute inset-0 size-9 blur-[36px]"
                  />
                  <Image
                    src={integration.img}
                    alt={integration.title}
                    width={48}
                    height={48}
                    className="size-9"
                  />
                </div>
              </div>
              <div>
                <h3 className="py-2 font-medium text-xl">
                  {integration.title}
                </h3>
                <p className="mt-4 mb-2 text-pretty text-muted-foreground tracking-normal">
                  {integration.description}
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
