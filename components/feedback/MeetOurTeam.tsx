// Next Components:
import Image from "next/image";

// Lucide Icons:
import { User } from "lucide-react";

// Constants:
import { teamMembers } from "@/constants/Team";

// Components:
import SectionHeading from "../common/SectionHeading";
import CarouselWrapper from "../shared/CarouselWrapper";

const MeetOurTeam = () => {
  return (
    <section className="bg-dark-400">
      <div className="container flex max-w-(--breakpoint-xl) flex-col justify-center gap-16 px-6 py-20 lg:px-8">
        <SectionHeading
          icon={User}
          heading="our Team"
          title="A team of founders"
          desctiption="Our dream is to provide the best health care for every human being"
        />

        <CarouselWrapper
          opts={{
            loop: true,
            align: "center",
          }}
        >
          {teamMembers.map((member) => (
            <div key={member.name}>
              <Image
                alt={member.name}
                className="aspect-square w-full rounded-lg bg-secondary object-cover"
                height={600}
                src={member.image}
                width={600}
              />

              <h3 className="mt-4 font-medium text-lg">{member.name}</h3>

              <p className="text-muted-foreground text-sm">{member.title}</p>

              <p className="mt-3 text-center">{member.description}</p>
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  );
};

export default MeetOurTeam;
