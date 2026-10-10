// Shadcn UI:
import { Badge } from "@/components/ui/badge";

// Lucide Icons:
import { Hash } from "lucide-react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Hash className="mr-1 size-4 text-muted-foreground" />

        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="rounded-full px-3 py-1.5 font-normal transition-colors hover:bg-muted"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default Tags;
