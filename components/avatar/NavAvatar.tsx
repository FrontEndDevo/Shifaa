// Shadcn UI:
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

// Constants:
import { AVATAR } from "@/constants/Avatar";

// Components:
import DropdownMenu from "../common/DropdownMenu";

type NavAvatarProps = { username: string };

const NavAvatar = ({ username }: NavAvatarProps) => {
  return (
    <Avatar className="group cursor-pointer" size="lg">
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
      <AvatarFallback>{username?.charAt(0).toUpperCase()}</AvatarFallback>
      <AvatarBadge className="bg-green-500" />

      <DropdownMenu data={AVATAR} />
    </Avatar>
  );
};

export default NavAvatar;
