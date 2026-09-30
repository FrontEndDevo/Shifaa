// Next Components:
import Image from "next/image";

// Constants:
import { HERO_CARDS } from "@/constants/HeroHome";

const HeroCards = () => {
  return (
    <div className="relative flex flex-1 h-full w-full lg:w-auto">
      {HERO_CARDS.map((card) => (
        <Image
          key={card.alt}
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          className={card.className}
        />
      ))}
    </div>
  );
};

export default HeroCards;
