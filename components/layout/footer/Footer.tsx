"use client";

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

// Types:
import { IFooterProps } from "@/types/footer.types";

// Constants:
import {
  CONTACT_LINKS,
  FOOTER_LINKS,
  NEWSLETTER_DATA,
} from "@/constants/FooterSection";

const Footer = ({
  newsletter = NEWSLETTER_DATA,
  footerLinks = FOOTER_LINKS,
  contactLinks = CONTACT_LINKS,
}: IFooterProps) => {
  return (
    <section className="pt-8 pb-8 xl:pt-12 border-t-2">
      <div className="container space-y-10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
          <div className="md:col-span-2 col-span-1 text-center xl:text-start xl:col-span-1">
            <NewsletterSection {...newsletter} />
          </div>
          <FooterLinksSection sections={footerLinks} />
          <ContactSection links={contactLinks} />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="copyright max-md:text-xs">© 2026 Shifaa</p>
          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue="english">
              <SelectTrigger className="h-8 w-24 text-xs">
                <SelectValue placeholder="Select a Language..." />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
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
