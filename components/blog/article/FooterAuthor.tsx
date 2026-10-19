// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Utilities:
import { getInitials } from "@/lib/utils";

type FooterAuthorProps = { name: string; avatar?: string; bio: string };

const FooterAuthor = ({ name, avatar, bio }: FooterAuthorProps) => {
  const t = useTranslations("Article");

  return (
    <section className="rounded-2xl border border-line bg-card p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <Avatar className="size-14 shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest rtl:tracking-normal text-faint">
            {t("writtenBy")}
          </p>
          <h2 className="mt-1 text-lg font-semibold">{name}</h2>
          <p className="mt-2 text-sm leading-7 text-soft">{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default FooterAuthor;
