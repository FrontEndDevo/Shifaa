"use client";

// Next Intl:
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        router.replace(pathname, { locale: locale === "en" ? "ar" : "en" })
      }
    >
      {locale === "en" ? "ع" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
