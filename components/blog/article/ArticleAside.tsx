// Next Intl:
import { useFormatter, useTranslations } from "next-intl";

// Shadcn UI:
import { Separator } from "@/components/ui/separator";

type ArticleAsideProps = {
  category: string;
  publishedAt: string;
  readTime: string;
};

const ArticleAside = ({
  category,
  publishedAt,
  readTime,
}: ArticleAsideProps) => {
  const t = useTranslations("Article");
  const format = useFormatter();

  const date = format.dateTime(new Date(publishedAt), {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <aside className="space-y-8 rounded-xl border border-line p-2 lg:sticky lg:top-20 lg:col-span-2 lg:self-start">
      <p className="mx-auto w-fit border-b border-line text-lg font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-faint lg:border-none lg:text-start lg:text-xs">
        {t("aboutThisPost")}
      </p>

      <Separator className="my-4" />

      <div className="flex items-center justify-around gap-12 text-center lg:block lg:space-y-5 lg:text-start">
        <div>
          <p className="text-xs text-faint">{t("category")}</p>
          <span className="mt-1 text-sm font-medium">{category}</span>
        </div>

        <div>
          <p className="text-xs text-faint">{t("published")}</p>
          <span className="mt-1 text-sm">{date}</span>
        </div>

        <div>
          <p className="text-xs text-faint">{t("readingTime")}</p>
          <span className="mt-1 text-sm font-medium">{readTime}</span>
        </div>
      </div>
    </aside>
  );
};

export default ArticleAside;
