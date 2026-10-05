// Shadcn UI:
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type NavAvatarProps = { username: string };

const NavAvatar = ({ username }: NavAvatarProps) => {
  return (
    <Avatar className="" size="lg">
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
      <AvatarFallback>{username?.charAt(0).toUpperCase()}</AvatarFallback>
      <AvatarBadge className="bg-green-500" />
    </Avatar>
  );
};

export default NavAvatar;
