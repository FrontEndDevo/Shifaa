// Lucide Icons:
import { ArrowRightCircle } from "lucide-react";
import { styles } from "./styles";

// Types:
import { CTAButtonsProps } from "@/types/hero.types";

// Google Fonts:
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function CTAButtons({
  primaryButtonText,
  secondaryButtonText,
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 justify-center lg:justify-start">
      <Link
        href="/"
        className={`${ibmPlexMono.className} flex items-center justify-center gap-2 text-blue-300 bg-blue-900 lg:bg-transparent lg:hover:bg-blue-900 hover:text-blue-100 lg:hover:text-blue-100 hover:gap-4 px-10 py-4 text-sm xl:text-base transition-all duration-200 rounded-full cursor-pointer`}
      >
        {secondaryButtonText}
        <ArrowRightCircle className="w-5 h-5" aria-hidden="true" />
      </Link>

      <Link
        href="/"
        className={`${ibmPlexMono.className} bg-emerald-600 hover:bg-emerald-900 text-white px-6 py-4 text-sm xl:text-base rounded-full cursor-pointer transition-all duration-200`}
      >
        {primaryButtonText}
      </Link>
    </div>
  );
}
