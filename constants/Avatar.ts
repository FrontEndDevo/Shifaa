// Types:
import { AvatarProps } from "@/types/avatar.types";

// Lucide Icons:
import { Calendar, User } from "lucide-react";

export const AVATAR: AvatarProps[] = [
  {
    title: "profile",
    icon: User,
    url: "/profile",
  },

  {
    title: "my appointments",
    icon: Calendar,
    url: "/profile",
  },
];
