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

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

// Next Intl:
import { useTranslations } from "next-intl";

const HeroTestimonials = () => {
  const t = useTranslations("Hero");

  const doctors = useLocalizedDoctors();
  return (
    <div className="flex flex-col-reverse justify-center gap-2 lg:flex-row lg:items-center lg:justify-start lg:gap-6">
      <div className="flex -space-x-2 rtl:space-x-reverse">
        {doctors.map((doctor) => (
          <Tooltip key={doctor.doctorId}>
            <TooltipTrigger>
              <Image
                src={doctor.image}
                alt={doctor.name}
                className="h-10 w-10 rounded-full border-2 border-white transition duration-200 hover:scale-125 hover:cursor-grab lg:h-12 lg:w-12 dark:border-slate-800"
                width={32}
                height={32}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{doctor.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-yellow-400 text-yellow-400 xl:h-4 xl:w-4"
            />
          ))}
        </div>

        <span className="text-xs text-slate-600 xl:text-sm dark:text-slate-400">
          {t("doctorsCount", { count: doctors.length * 3 })}
        </span>
      </div>
    </div>
  );
};

export default HeroTestimonials;
