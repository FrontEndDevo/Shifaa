// Lucide Icons:
import { ArrowRightCircle } from "lucide-react";

// Customised Next Components:
import { useRouter } from "@/i18n/navigation";

// Shadcn UI:
import { Button } from "../ui/button";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Next Intl:
import { useTranslations } from "next-intl";

export function CTAButtons() {
  const t = useTranslations("Hero");

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

  const heroActionBtnName =
    data?.status === "IS_PATIENT" ? t("bookAppointment") : t("getStarted");

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start lg:gap-4">
      <Button
        onClick={findDoctorHandler}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-900 px-12 py-6 font-serif text-xl text-blue-300 transition-all duration-200 hover:gap-4 hover:text-blue-100 lg:bg-transparent lg:text-2xl lg:text-blue-800 lg:hover:bg-blue-900 lg:hover:text-blue-100 xl:text-3xl dark:lg:text-blue-300 dark:lg:hover:text-blue-100 rtl:font-sans"
      >
        {t("findDoctor")}
        <ArrowRightCircle
          className="h-5 w-5 rtl:rotate-180"
          aria-hidden="true"
        />
      </Button>

      <Button
        onClick={getStartedHandler}
        className={`rounded-full px-12 py-6 font-serif text-xl text-white transition-all duration-200 lg:text-2xl xl:text-3xl rtl:font-sans cursor-pointer ${
          data?.status === "IS_PATIENT"
            ? "bg-emerald-600 hover:bg-emerald-900"
            : "bg-blue-600 hover:bg-blue-900"
        }`}
      >
        {heroActionBtnName}
      </Button>
    </div>
  );
}
