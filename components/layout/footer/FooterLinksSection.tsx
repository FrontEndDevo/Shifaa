// Next Components:
import Link from "next/link";

// Types:
import { IFooterLinksSectionProps } from "@/types/footer.types";

const FooterLinksSection = ({ sections }: IFooterLinksSectionProps) => {
  return (
    <div className="flex gap-8 text-center">
      {sections.map(({ title, items }) => (
        <div key={crypto.randomUUID()}>
          <h2 className="mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
            {title}
          </h2>
          <ul className="space-y-3">
            {items.map(({ text, link }) => (
              <li key={crypto.randomUUID()}>
                <Link
                  href={link}
                  className="underline-offset-4 hover:underline"
                >
                  {text}
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
