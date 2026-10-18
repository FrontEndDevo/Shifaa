// Next Components:
import Image from "next/image";
import Link from "next/link";

// Shadcn UI:
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";

// Constants:
import { CONTACT_LINKS, LINK_TYPES } from "@/constants/FooterSection";

// Next Intl:
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("Footer.contact");
  const { socialMedia, contactDetails } = CONTACT_LINKS;

  return (
    <div>
      <h2 className="mb-6 text-center text-sm leading-tight font-medium text-faint uppercase">
        {t("title")}
      </h2>
      <div className="space-y-6">
        <ul className="space-y-3">
          {contactDetails.map((item) => (
            <li className="flex items-center gap-3" key={item.id}>
              <item.icon className="size-4 shrink-0 basis-4" />
              <div className="flex-1">
                {item.type === LINK_TYPES.NO_LINK ? (
                  <p>{t(item.id)}</p>
                ) : (
                  <Link
                    href={
                      item.type === LINK_TYPES.EMAIL_LINK
                        ? `mailto:${item.link}`
                        : `tel:${item.link}`
                    }
                    dir="ltr"
                    className="inline-block underline-offset-4 hover:underline"
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {socialMedia.map(({ icon, link }) => (
            <li key={icon.title}>
              <Button>
                <Link href={link}>
                  <Image
                    className={cn("size-5", icon.className)}
                    alt={icon.title}
                    src={icon.src}
                    width={24}
                    height={24}
                  />
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
