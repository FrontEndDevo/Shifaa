// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import DropdownMenu from "../common/DropdownMenu";
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";

// Constants:
import { AVATAR } from "@/constants/Avatar";

// Utilities:
import { getInitials } from "@/lib/utils";

type NavAvatarProps = { username: string };

const NavAvatar = ({ username }: NavAvatarProps) => {
  const t = useTranslations("Avatar");

  const items = AVATAR.map((item) => ({
    title: t(`items.${item.id}`),
    icon: item.icon,
    url: item.url,
  }));

  return (
    <Avatar className="group cursor-pointer" size="lg">
      <AvatarFallback>{getInitials(username)}</AvatarFallback>
      <AvatarBadge className="bg-green-500" />

      <DropdownMenu data={items} showLogout />
    </Avatar>
  );
};

export default NavAvatar;
