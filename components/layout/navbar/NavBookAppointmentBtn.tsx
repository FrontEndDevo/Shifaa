// Next Hooks:
import { useRouter } from "next/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NavBookAppointmentBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/login")}
      className="group flex gap-2 bg-blue-600 hover:bg-blue-800 py-1 px-4"
    >
      <p className="font-mono text-base">Book Appointment</p>
      <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
    </Button>
  );
};

export default NavBookAppointmentBtn;
