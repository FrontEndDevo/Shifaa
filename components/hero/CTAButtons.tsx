// Next Components:
import { useRouter } from "next/navigation";

// Shadcn UI:
import { Button } from "../ui/button";

// Lucide Icons:
import { ArrowRightCircle } from "lucide-react";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Google Fonts:
import { IBM_Plex_Mono } from "next/font/google";
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function CTAButtons() {
  const { data } = useGetPatient();

  const router = useRouter();

  const getStartedHandler = () => {
    if (data?.userId) {
      router.push(`/patients/${data?.userId}/new-appointment`);
    } else {
      router.push(`/auth/login`);
    }
  };

  const findDoctorHandler = () => {
    router.push("/doctors");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 justify-center items-center lg:justify-start">
      <Button
        onClick={findDoctorHandler}
        className={`${ibmPlexMono.className} flex items-center justify-center gap-2 text-blue-300 bg-blue-900 lg:bg-transparent lg:hover:bg-blue-900 hover:text-blue-100 lg:hover:text-blue-100 hover:gap-4 px-12 py-6 text-sm xl:text-base transition-all duration-200 rounded-full cursor-pointer`}
      >
        Find a Doctor
        <ArrowRightCircle className="w-5 h-5" aria-hidden="true" />
      </Button>

      <Button
        onClick={getStartedHandler}
        className={`${ibmPlexMono.className} ${data?.userId ? "bg-emerald-600 hover:bg-emerald-900" : "bg-blue-600 hover:bg-blue-900"} text-white px-12 py-6 text-sm xl:text-base rounded-full cursor-pointer transition-all duration-200`}
      >
        {data?.userId ? "Book Your Appointment" : "Get Started"}
      </Button>
    </div>
  );
}
