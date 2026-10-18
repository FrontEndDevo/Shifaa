// customised Next Components:
import { useRouter } from "@/i18n/navigation";

// Shadcn UI:
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Lucide Icons:
import { ArrowRight, LogInIcon, UserRoundArrowLeft } from "lucide-react";

// Types:
import { TPatientStatus } from "@/types/patient.types";

// Next Intl:
import { useTranslations } from "next-intl";

const NavActionButton = ({
  userId,
  status,
}: {
  userId: string;
  status: TPatientStatus;
}) => {
  const t = useTranslations("Nav");

  const router = useRouter();

  const navLinkHandler = () => {
    if (userId && status === "NEEDS_ONBOARDING") {
      router.push(`/auth/${userId}/register`);
    } else if (status === "UNAUTHENTICATED") {
      router.push(`/auth/login`);
    } else {
      router.push(`/patients/${userId}/new-appointment`);
    }
  };

  const NavIcon =
    status === "NEEDS_ONBOARDING"
      ? UserRoundArrowLeft
      : status === "UNAUTHENTICATED"
        ? LogInIcon
        : ArrowRight;

  let navBtnName = null;
  switch (status) {
    case "UNAUTHENTICATED":
      navBtnName = t("navStatus.UNAUTHENTICATED");
      break;
    case "NEEDS_ONBOARDING":
      navBtnName = t("navStatus.NEEDS_ONBOARDING");
      break;
    case "IS_PATIENT":
      navBtnName = t("navStatus.IS_PATIENT");
      break;
  }

  return (
    <>
      {status && (
        <Button
          onClick={navLinkHandler}
          className={`group text-white flex gap-2 py-1 px-4 ${userId ? "bg-emerald-600 hover:bg-emerald-800" : "bg-blue-600 hover:bg-blue-800"}`}
        >
          <p className="font-mono text-base">{navBtnName}</p>

          <NavIcon
            className={cn(
              "size-5 transition-transform duration-200",
              "group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
              NavIcon === ArrowRight && "rtl:rotate-180",
            )}
          />
        </Button>
      )}
    </>
  );
};

export default NavActionButton;
