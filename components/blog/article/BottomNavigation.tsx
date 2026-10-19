// Lucide Icons:
import { ArrowLeft } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Customised Next Components:
import { Link } from "@/i18n/navigation";

const BottomNavigation = () => {
  const t = useTranslations("Article");

  return (
    <footer className="border-t-2 border-line md:border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 md:items-start lg:px-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500"
        >
          <ArrowLeft className="size-4 transition duration-150 group-hover:-translate-x-2 rtl:rotate-180 rtl:group-hover:translate-x-2" />
          {t("explore")}
        </Link>

        <p className="hidden text-xs text-faint md:block">
          {t("rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default BottomNavigation;
