// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Star } from "lucide-react";

// Shadcn UI:
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Constants:
import { Doctors } from "@/constants";

const HeroTestimonials = () => {
  return (
    <div className="flex lg:items-center justify-center flex-col-reverse lg:flex-row lg:justify-start space-x-4 gap-2">
      <div className="flex -space-x-2">
        {Doctors.map((doctor, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  key={doctor.name}
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 rounded-full border-2 border-white dark:border-slate-800 transition duration-200 hover:scale-125 hover:cursor-grab"
                  width={32}
                  height={32}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Dr. {doctor.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className="w-3 h-3 xl:w-4 xl:h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <span className="text-xs lg:text-xs xl:text-sm text-slate-600 dark:text-slate-400">
          Over {Doctors.length * 3}+ doctors at your service.
        </span>
      </div>
    </div>
  );
};

export default HeroTestimonials;
