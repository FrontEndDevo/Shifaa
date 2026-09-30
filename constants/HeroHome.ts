export const SHIFAA_DATA = {
  brandName: "Shifaa",
  headline: "Book Faster. Care Better.",
  description:
    "Shifaa connects you with top-rated doctors in seconds, so you can find the right specialist, compare real patient reviews, and book instant appointments without endless phone calls.",
  primaryButtonText: "Book Your Appointment",
  secondaryButtonText: "Find a Doctor",
};

const commonClasses =
  "absolute lg:scale-55 xl:scale-100 border-[1px] rounded-2xl shadow-xl";

export const HERO_CARDS = [
  {
    src: "/assets/images/hero/hero_cards/hero_card_1.jpg",
    alt: "Card 1",
    width: 200,
    height: 200,
    className: `${commonClasses} top-1/4 left-1/4 xl:left-auto xl:right-1/4 xl:top-1/3 z-2 border-white`,
  },
  {
    src: "/assets/images/hero/hero_cards/hero_card_2.jpg",
    alt: "Card 2",
    width: 170,
    height: 170,
    className: `${commonClasses} top-0 xl:right-1/16 xl:right-10 border-black rotate-12`,
  },
  {
    src: "/assets/images/hero/hero_cards/hero_card_3.jpg",
    alt: "Card 3",
    width: 170,
    height: 170,
    className: `${commonClasses} top-0 left-1/16 xl:left-1/4 xl:bottom-14 border-black -rotate-12`,
  },
];

export const HERO_ICONS = [
  {
    src: "/assets/images/hero/hero_float/bed.png",
    alt: "bed",
    position: "top-1/6 left-1/6 lg:top-1/4 lg:left-1/3",
    delay: ".2s",
  },
  {
    src: "/assets/images/hero/hero_float/health-insurance.png",
    alt: "health-insurance",
    position: "top-1/6 right-1/6 lg:top-1/2 lg:left-1/2",
    delay: "1s",
  },
  {
    src: "/assets/images/hero/hero_float/medical-team.png",
    alt: "medical-team",
    position: "top-1/3 left-1/3 lg:top-3/4 lg:left-1/3",
    delay: "0s",
  },
  {
    src: "/assets/images/hero/hero_float/pin.png",
    alt: "pin",
    position: "top-1/3 right-1/3 lg:top-1/2 lg:right-1/4",
    delay: ".8s",
  },
  {
    src: "/assets/images/hero/hero_float/sign.png",
    alt: "sign",
    position: "top-1/2 left-1/6 lg:right-1/3",
    delay: ".4s",
  },
  {
    src: "/assets/images/hero/hero_float/surgery-room.png",
    alt: "surgery-room",
    position: "top-1/2 right-1/6 lg:top-12 lg:left-1/2",
    delay: ".6s",
  },
];
