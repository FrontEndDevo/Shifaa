import { Hash } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Hash className="me-1 size-4 text-faint" />

      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className="rounded-full border-line px-3 py-1.5 font-normal transition-colors hover:bg-line"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
