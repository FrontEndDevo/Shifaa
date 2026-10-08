// Next Hooks:
import { useRouter } from "next/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// Lucide Icons:
import { ArrowRight, LogInIcon, UserRoundArrowLeft } from "lucide-react";

// Types:
import { TPatientStatus } from "@/types/patient.types";

const NavActionButton = ({
  userId,
  status,
}: {
  userId: string;
  status: TPatientStatus;
}) => {
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
      navBtnName = "Log in";
      break;
    case "NEEDS_ONBOARDING":
      navBtnName = "Complete Profile";
      break;
    case "IS_PATIENT":
      navBtnName = "Book Appointment";
      break;
  }

  return (
    <>
      {status && (
        <Button
          onClick={navLinkHandler}
          className={`group flex gap-2 py-1 px-4 ${userId ? "bg-emerald-600 hover:bg-emerald-800" : "bg-blue-600 hover:bg-blue-800"}`}
        >
          <p className="font-mono text-base">{navBtnName}</p>

          <NavIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      )}
    </>
  );
};

export default NavActionButton;
