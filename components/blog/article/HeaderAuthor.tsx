// Shadcn UI:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Next Intl:
import { useFormatter, useTranslations } from "next-intl";

// Lucide Icons:
import { CalendarDays, Clock3 } from "lucide-react";

// Utilities:
import { getInitials } from "@/lib/utils";

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
  const t = useTranslations("Article");

  const date = useFormatter().dateTime(new Date(publishedAt), {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="mt-8 hidden flex-col items-center justify-between gap-5 sm:flex-row sm:gap-8 md:flex">
      <div className="flex items-center gap-3 text-start">
        <Avatar className="size-11 border border-line">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-xs text-faint">{t("author")}</p>
          <p className="text-sm font-medium">{name}</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-4" />
        {date}
      </span>

      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-4" />
        {readTime}
      </span>
    </div>
  );
};

export default HeaderAuthor;
