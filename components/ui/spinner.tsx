"use client";

// Shadcn UI:
import { cn } from "cn";

// Lucide Icons:
import { Loader2Icon } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  const t = useTranslations("Common");

  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label={t("loading")}
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
