// Next Components:
import Image from "next/image";
import Link from "next/link";

// Shadcn UI:
import { cn } from "cn";
import { Button } from "@base-ui/react";

// Types:
import { ContactSectionProps } from "@/types/footer.types";

// Constants:
import { LINK_TYPES } from "@/constants/FooterSection";

const ContactSection = ({ links }: ContactSectionProps) => {
  const { socialMedia, contactDetails } = links;

  return (
    <div>
      <h2 className="text-center mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
        Contact
      </h2>
      <div className="space-y-6">
        <ul className="space-y-3">
          {contactDetails.map((item) => (
            <li className="flex items-center gap-3" key={crypto.randomUUID()}>
              <item.icon className="size-4 shrink-0 basis-4" />
              <div className="flex-1">
                {item.type === LINK_TYPES.NO_LINK ? (
                  <p>{item.text}</p>
                ) : (
                  <Link
                    href={
                      LINK_TYPES.EMAIL_LINK
                        ? `mailto:${item.link}`
                        : `tel:${item.link}`
                    }
                    className="underline-offset-4 hover:underline"
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
            <li key={crypto.randomUUID()}>
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
