import { LucideIcon } from "lucide-react";

type ContactCommon = {
  title: string;
  description: string;
};

type ContactBenefit = {
  name: string;
  badge: LucideIcon;
  className: string;
};

type ContactForm = ContactCommon & {
  topAlert: string;
};

type ContactBox = ContactCommon & {
  badge: LucideIcon;
};

export type ContactFormProps = ContactCommon & {
  benefits: ContactBenefit[];
  contact: ContactBox;
  contactForm: ContactForm;
};
