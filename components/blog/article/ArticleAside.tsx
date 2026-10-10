// Shadcn UI:
import { Separator } from "@/components/ui/separator";

// Utilities:
import { formatDateTime } from "@/lib/utils";

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
  return (
    <aside className="space-y-8 lg:sticky lg:top-20 lg:self-start lg:col-span-2 border rounded-xl p-2">
      <p className="lg:text-start border-b w-fit mx-auto lg:border-none text-lg lg:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        About this post
      </p>

      <Separator className="my-4" />

      <div className="lg:space-y-5 text-center lg:text-start flex items-center justify-around gap-12 lg:block">
        <div>
          <p className="text-xs text-muted-foreground">Category</p>
          <span className="mt-1 text-sm font-medium">{category}</span>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Published</p>
          <span className="mt-1 text-sm">
            {formatDateTime(publishedAt).dateTime}
          </span>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Reading time</p>
          <span className="mt-1 text-sm font-medium">{readTime}</span>
        </div>
      </div>
    </aside>
  );
};

export default ArticleAside;
