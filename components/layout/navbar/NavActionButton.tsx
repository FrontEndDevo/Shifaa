// Next Hooks:
import { useRouter } from "next/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";
import { ArrowRight, LogInIcon } from "lucide-react";

const NavActionButton = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const navLinkHandler = () => {
    if (userId) {
      router.push(`/patients/${userId}/new-appointment`);
    } else {
      router.push(`/auth/login`);
    }
  };

  const NavIcon = userId ? ArrowRight : LogInIcon;

  return (
    <Button
      onClick={navLinkHandler}
      className={`group flex gap-2 py-1 px-4 ${userId ? "bg-emerald-600 hover:bg-emerald-800" : "bg-blue-600 hover:bg-blue-800"}`}
    >
      <p className="font-mono text-base">
        {userId ? "Book Appointment" : "Log in"}
      </p>
      <NavIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
    </Button>
  );
};

export default NavActionButton;
