// Lucide Icons:
import { ContactFormProps } from "@/types/contact.types";
import { ShieldCheck, Star, Brain, Gem, Contact } from "lucide-react";

export const CONTACT_DATA: ContactFormProps = {
  title: "Contact Shifaa",
  description:
    "Shifaa is a trusted cardiology practice dedicated to providing exceptional heart care with compassion, expertise, and advanced technology. Our experienced team is committed to putting patients first and helping every individual achieve better heart health.",

  benefits: [
    {
      name: "20+ Years of Care",
      badge: Brain,
      className: "text-red-400",
    },
    {
      name: "Board-Certified Specialists",
      badge: Gem,
      className: "text-yellow-400",
    },
    {
      name: "HIPAA Compliant",
      badge: ShieldCheck,
      className: "text-red-400",
    },
    {
      name: "Top Rated 2026",
      badge: Star,
      className: "text-yellow-400",
    },
  ],

  contact: {
    title: "Get in Touch With Our Care Team",
    description:
      "Have a question or need assistance? Send us a message and our care team will get back to you as soon as possible.",
    badge: Contact,
  },
  contactForm: {
    title: "Send Message",
    description:
      "Whether you have a question about our services, need help with an appointment, or simply want to learn more, we're here to help.",
    topAlert:
      "We respect your privacy. Your information is secure and will only be used to respond to your request.",
  },
};
