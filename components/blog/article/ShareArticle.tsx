// React Hooks:
import { useState } from "react";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// Lucide UI:
import { Check, Link2 } from "lucide-react";

type ShareArticleProps = { title: string; description: string };

const ShareArticle = ({ title, description }: ShareArticleProps) => {
  const [copied, setCopied] = useState(false);

  const shareArticleHandler = () => {
    navigator.clipboard.writeText(`${title}...${description}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Enjoyed this post? Copy and share it with someone.
      </p>

      <Button
        onClick={shareArticleHandler}
        variant="outline"
        className="gap-2 rounded-full"
      >
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        {copied ? "Post copied" : "Copy / share post"}
      </Button>
    </div>
  );
};

export default ShareArticle;
