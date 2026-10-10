// Shadcn UI:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Lucide Icons:
import { CalendarDays, Clock3 } from "lucide-react";

// Utilities:
import { formatDateTime, getInitials } from "@/lib/utils";

// Types:
import { BlogAuthor } from "@/types/articles.types";

type HeaderAuthorProps = {
  publishedAt: string;
  readTime: string;
  author: BlogAuthor;
};

const HeaderAuthor = ({
  publishedAt,
  readTime,
  author: { avatar, name },
}: HeaderAuthorProps) => {
  return (
    <div className="hidden  mt-8 md:flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-8">
      <div className="flex items-center gap-3 text-left">
        <Avatar className="size-11 border">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-xs text-muted-foreground">Author</p>
          <p className="text-sm font-medium">{name}</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-4" />
        {formatDateTime(publishedAt).dateTime}
      </span>

      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-4" />
        {readTime}
      </span>
    </div>
  );
};

export default HeaderAuthor;
