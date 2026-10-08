// Next Components:
import { useRouter } from "next/navigation";

// Shadcn UI:
import { Button } from "../ui/button";

// Lucide Icons:
import { ArrowRightCircle } from "lucide-react";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

export function CTAButtons() {
  const { data } = useGetPatient();

  const router = useRouter();

  const getStartedHandler = () => {
    if (data?.userId) {
      if (data?.status === "IS_PATIENT") {
        router.push(`/patients/${data?.userId}/new-appointment`);
      } else {
        router.push(`/auth/${data?.userId}/register`);
      }
    } else {
      router.push(`/auth/login`);
    }
  };

  const findDoctorHandler = () => {
    router.push("/doctors");
  };

  let heroActionBtnName = null;
  switch (data?.status) {
    case "IS_PATIENT":
      heroActionBtnName = "Book Your Appointment";
      break;

    default:
      heroActionBtnName = "Get Started";
      break;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 justify-center items-center lg:justify-start">
      <Button
        onClick={findDoctorHandler}
        className={`font-serif flex items-center justify-center gap-2 text-blue-300 bg-blue-900 lg:bg-transparent lg:hover:bg-blue-900 hover:text-blue-100 lg:hover:text-blue-100 hover:gap-4 px-12 py-6 text-xl lg:text-2xl xl:text-3xl transition-all duration-200 rounded-full cursor-pointer`}
      >
        Find a Doctor
        <ArrowRightCircle className="w-5 h-5" aria-hidden="true" />
      </Button>

      <Button
        onClick={getStartedHandler}
        className={`font-serif ${data?.status === "IS_PATIENT" ? "bg-emerald-600 hover:bg-emerald-900" : "bg-blue-600 hover:bg-blue-900"} text-white px-12 py-6 text-xl lg:text-2xl xl:text-3xl rounded-full cursor-pointer transition-all duration-200`}
      >
        {heroActionBtnName}
      </Button>
    </div>
  );
}
