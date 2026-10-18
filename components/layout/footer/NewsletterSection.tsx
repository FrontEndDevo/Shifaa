// Next Intl:
import { useTranslations } from "next-intl";

const NewsletterSection = () => {
  const t = useTranslations("Footer");

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-serif text-3xl leading-none font-medium">
          {t("brand")}
        </h3>
        <p className="leading-normal font-light">{t("description")}</p>
      </div>
    </div>
  );
};

export default NewsletterSection;
