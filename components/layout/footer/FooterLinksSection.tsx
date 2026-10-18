// Customised Next Components:
import { Link } from "@/i18n/navigation";

// Constants:
import { FOOTER_LINKS } from "@/constants/FooterSection";

// Next Intl:
import { useTranslations } from "next-intl";

const FooterLinksSection = () => {
  const t = useTranslations("Footer.sections");

  return (
    <div className="flex gap-8 text-center">
      {FOOTER_LINKS.map(({ id, items }) => (
        <div key={id}>
          <h2 className="mb-6 text-sm leading-tight font-medium text-faint uppercase">
            {t(`${id}.title`)}
          </h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="underline-offset-4 hover:underline"
                >
                  {t(`${id}.items.${item.id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinksSection;
