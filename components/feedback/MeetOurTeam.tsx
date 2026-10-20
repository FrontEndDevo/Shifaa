// Next Components:
import Image from "next/image";

// Lucide Icons:
import { User } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Constants:
import { teamMembers } from "@/constants/Team";

// Components:
import SectionHeading from "../common/SectionHeading";
import CarouselWrapper from "../shared/CarouselWrapper";

const MeetOurTeam = () => {
  const t = useTranslations("Team");

  return (
    <section className="bg-card">
      <div className="container flex max-w-(--breakpoint-xl) flex-col justify-center gap-16 px-6 py-20 lg:px-8">
        <SectionHeading
          icon={User}
          heading={t("heading")}
          title={t("title")}
          description={t("description")}
        />

        <CarouselWrapper
          opts={{
            loop: true,
            align: "center",
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-t-lg border-2 border-line p-2"
            >
              <Image
                alt={t(`members.${member.id}.name`)}
                className="aspect-square w-full rounded-t-lg bg-line object-cover"
                height={600}
                src={member.image}
                width={600}
              />

              <h3 className="mt-4 text-lg font-medium">
                {t(`members.${member.id}.name`)}
              </h3>

              <p className="text-sm text-faint">
                {t(`members.${member.id}.title`)}
              </p>

              <p className="mt-3 text-center">
                {t(`members.${member.id}.description`)}
              </p>
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  );
};

export default MeetOurTeam;
