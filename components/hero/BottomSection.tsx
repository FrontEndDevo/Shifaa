// Components:
import FloatingIcons from "./FloatingIcons";
import { GlowingSeparator } from "./GlowingSeparator";
import HeroCards from "./HeroCards";

const BottomSection = () => {
  return (
    <div className="hidden xl:flex flex-col xl:flex-row items-center justify-center w-full h-[65dvh] lg:h-[25%]">
      <FloatingIcons />
      <GlowingSeparator />
      <HeroCards />
    </div>
  );
};

export default BottomSection;
