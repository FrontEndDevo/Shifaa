// Components:
import FloatingIcons from "./FloatingIcons";
import { GlowingSeparator } from "./GlowingSeparator";
import HeroCards from "./HeroCards";

const BottomSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-[65dvh] lg:h-[25%]">
      <FloatingIcons />
      <GlowingSeparator />
      <HeroCards />
    </div>
  );
};

export default BottomSection;
