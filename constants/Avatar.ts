import { Calendar, User } from "lucide-react";

import type { AvatarProps } from "@/types/avatar.types";

export const AVATAR: AvatarProps[] = [
  { id: "profile", icon: User, url: "/profile" },
  { id: "myAppointments", icon: Calendar, url: "/profile" },
];
