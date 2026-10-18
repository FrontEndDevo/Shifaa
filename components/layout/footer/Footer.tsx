"use client";

// Customised Next Components:
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Shadcn UI:
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Components:
import NewsletterSection from "./NewsletterSection";
import FooterLinksSection from "./FooterLinksSection";
import ContactSection from "./ContactSection";

// Next Intl:
import { useLocale, useTranslations } from "next-intl";

type Locale = (typeof routing.locales)[number];

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];

const Footer = () => {
  const t = useTranslations("Footer");

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguageHandler = (value: string | null) => {
    if (!value || value === locale) return;
    router.replace(pathname, { locale: value as Locale });
  };

  return (
    <section className="border-t-2 border-line pt-8 pb-8 xl:pt-12">
      <div className="container space-y-10">
        <div className="grid grid-cols-1 justify-items-center gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1 text-center md:col-span-2 xl:col-span-1 xl:text-start">
            <NewsletterSection />
          </div>
          <FooterLinksSection />
          <ContactSection />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="copyright max-md:text-xs">{t("copyright")}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Select
              value={locale}
              onValueChange={changeLanguageHandler}
              items={LANGUAGES}
            >
              <SelectTrigger
                className="h-8 w-24 text-xs"
                aria-label={t("language")}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
