// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Calendar, ChevronRight } from "lucide-react";

// Shadcn UI:
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Types:
import { BlogArticle } from "@/types/articles.types";
import { formatDateTime } from "@/lib/utils";
import { useRouter } from "next/navigation";

const BlogPost = ({ post }: { post: BlogArticle }) => {
  const { slug, title, image, category, readTime, publishedAt } = post;

  const router = useRouter();

  const postDate = formatDateTime(publishedAt).dateOnly;

  return (
    <div className="overflow-hidden rounded-lg py-0 border" key={title}>
      <div className="relative p-0">
        <div className="relative aspect-video w-full border-b">
          <Image
            src={image}
            alt={title}
            className="object-cover max-h-full"
            width={1000}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 font-bold">
          <Badge className="bg-dark-500 rounded-full shadow-none hover:bg-dark-600">
            {category}
          </Badge>
          <span className="bg-slate-200 text-blue-500 py-1 px-2 rounded-full text-muted-foreground text-xs">
            {readTime}
          </span>
        </div>

        <h3 className="mt-4 font-extrabold text-[1.4rem] text-xl tracking-[-0.02em]">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex gap-1 items-center text-gray-500 font-semibold">
            <Calendar className="h-4 w-4" />
            <p>{postDate}</p>
          </div>

          <Button
            className="group border-white"
            onClick={() => router.push(`/blog/article/${slug}`)}
          >
            Read more{" "}
            <ChevronRight className="group-hover:translate-x-1 transition duration-200" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
