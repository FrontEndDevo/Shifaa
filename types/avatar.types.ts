import type { LucideIcon } from "lucide-react";

export type AvatarProps = {
  id: "profile" | "myAppointments";
  icon: LucideIcon;
  url: string;
};
