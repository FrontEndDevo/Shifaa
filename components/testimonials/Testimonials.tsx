// Next Components:
import Image from "next/image";

// Shadcn UI:
import { Avatar, AvatarFallback } from "../ui/avatar";

// Constants:
import { PATIENTS_TESTIMONIALS } from "@/constants/Testimonials";

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
      <h2 className="text-center font-medium text-4xl tracking-tight md:text-4xl">
        Testimonials
      </h2>
      <p className="mt-2.5 text-balance text-center text-lg text-muted-foreground sm:text-2xl">
        What our patient say about us
      </p>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATIENTS_TESTIMONIALS.map(
          ({ name, avatar, role, testimonial }, index) => (
            <div
              className="relative flex flex-col rounded-lg border bg-muted/70 px-5 pt-10 pb-3"
              key={index}
            >
              <span className="absolute top-2 left-4 font-satoshi text-8xl text-foreground/30">
                &ldquo;
              </span>

              <p className="grow py-6 font-medium text-lg">{testimonial}</p>

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
                      <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                        {name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{name}</p>
                  <p className="text-muted-foreground text-sm">{role}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Testimonials;
