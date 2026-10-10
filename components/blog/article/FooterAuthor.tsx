// Shadcn UI:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type FooterAuthorProps = { name: string; avatar?: string; bio: string };

const FooterAuthor = ({ name, avatar, bio }: FooterAuthorProps) => {
  return (
    <section className="rounded-2xl border bg-muted/30 p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <Avatar className="size-14 shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Written by
          </p>
          <h2 className="mt-1 text-lg font-semibold">{name}</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default FooterAuthor;
