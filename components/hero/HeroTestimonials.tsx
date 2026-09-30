// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Star } from "lucide-react";

// Styles:
import { styles } from "./styles";

// Constants:
import { Doctors } from "@/constants";

const HeroTestimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.avatarContainer}>
        {Doctors.map((doctor) => (
          <Image
            key={doctor.name}
            src={doctor.image}
            alt={doctor.name}
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 rounded-full border-2 border-white dark:border-slate-800 transition duration-200 hover:scale-125 hover:cursor-grab"
            width={32}
            height={32}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={styles.starIcon} />
          ))}
        </div>

        <span className={`${styles.reviewText}`}>
          Over {Doctors.length * 3}+ doctors at your service.
        </span>
      </div>
    </div>
  );
};

export default HeroTestimonials;
