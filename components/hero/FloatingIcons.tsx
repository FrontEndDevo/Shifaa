// Next Components:
import Image from "next/image";

// Constants:
import { HERO_ICONS } from "@/constants/HeroHome";

const FloatingIcons = () => {
  return (
    <div className="flex-1 relative h-full w-full lg:w-auto">
      {HERO_ICONS.map((icon, index) => (
        <Image
          key={index}
          className={`animate-pulse absolute w-10 h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12 ${icon.position}`}
          style={{
            animation: "float 3s ease-in-out infinite",
            animationDelay: icon.delay,
          }}
          src={icon.src}
          alt={icon.alt}
          width={0}
          height={0}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
