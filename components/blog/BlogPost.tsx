// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Calendar, ChevronRight } from "lucide-react";

// Next Intl:
import { useFormatter, useTranslations } from "next-intl";

// Customised Next Components:
import { useRouter } from "@/i18n/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Types:
import type { BlogArticle } from "@/types/articles.types";

const BlogPost = ({ post }: { post: BlogArticle }) => {
  const { slug, title, image, category, readTime, publishedAt } = post;

  const t = useTranslations("Blog");
  const format = useFormatter();
  const router = useRouter();

  const postDate = format.dateTime(new Date(publishedAt), {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="overflow-hidden rounded-lg border border-line py-0">
      <div className="relative p-0">
        <div className="relative aspect-video w-full border-b border-line">
          <Image
            src={image}
            alt={title}
            className="max-h-full object-cover"
            width={1000}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 font-bold">
          <Badge className="rounded-full bg-line shadow-none hover:bg-faint">
            {category}
          </Badge>
          <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-blue-500">
            {readTime}
          </span>
        </div>

        <h3 className="mt-4 text-[1.4rem] text-xl font-extrabold tracking-[-0.02em] rtl:tracking-normal">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 font-semibold text-faint">
            <Calendar className="h-4 w-4" />
            <p>{postDate}</p>
          </div>

          <Button
            className="group border-white"
            onClick={() => router.push(`/blog/article/${slug}`)}
          >
            {t("readMore")}{" "}
            <ChevronRight className="transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
