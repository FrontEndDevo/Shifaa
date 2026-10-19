// React Hooks:
import { useState } from "react";

// Lucide Icons:
import { Check, Link2 } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Button } from "@/components/ui/button";

type ShareArticleProps = { title: string; description: string };

const ShareArticle = ({ title, description }: ShareArticleProps) => {
  const [copied, setCopied] = useState(false);

  const t = useTranslations("Article");

  const shareArticleHandler = () => {
    navigator.clipboard.writeText(`${title}...${description}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-faint">{t("shareText")}</p>

      <Button
        onClick={shareArticleHandler}
        variant="outline"
        className="gap-2 rounded-full"
      >
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        {copied ? t("copied") : t("copy")}
      </Button>
    </div>
  );
};

export default ShareArticle;
