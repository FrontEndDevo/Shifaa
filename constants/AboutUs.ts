// Lucide Icons:
import { Eye, Target, HeartHandshake, BookOpen } from "lucide-react";

// Types:
import { AboutBasicProps } from "@/types/about.types";

export const ABOUT_CONTENT: AboutBasicProps = {
  heading: "About Us",
  description:
    "We are committed to making quality healthcare more accessible, convenient, and patient-centered. Our team brings together healthcare professionals, technology experts, and dedicated support staff to create a trusted experience for patients and providers.",

  sections: [
    {
      title: "Our Vision",
      content:
        "We envision a healthcare experience where patients can access the care they need with confidence, convenience, and compassion.\n\nHealthcare should be simple and accessible. From finding the right provider to managing appointments and receiving ongoing support, we believe every part of the patient journey should feel clear and connected.\n\nBy combining compassionate care with modern technology, we work to make healthcare easier for patients, families, and healthcare professionals.\n\nOur goal is to build a trusted healthcare experience centered around the people who matter most—our patients.",
      icon: Eye,
    },
    {
      title: "Our Story",
      content:
        "Our journey began with a simple idea: healthcare can be more accessible, personal, and convenient for everyone.\n\nOur team brings together experienced healthcare professionals, technology specialists, and people who are passionate about improving the patient experience.\n\nWe continuously listen to patients and providers, learn from their experiences, and improve the way we deliver our services.\n\nEvery decision we make is guided by our commitment to quality care, patient trust, and meaningful outcomes.",
      icon: BookOpen,
    },
    {
      title: "What drives us",
      content:
        "We believe great healthcare starts with listening. We put patients at the center of everything we do, work closely with healthcare professionals, and continuously look for better ways to serve our community.\n\nWe are driven by compassion, transparency, innovation, and a commitment to making every patient interaction more meaningful.",
      icon: HeartHandshake,
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to connect people with reliable healthcare services while providing a safe, convenient, and compassionate experience. We focus on putting patients first, supporting healthcare professionals, and using technology to remove unnecessary barriers to care.",
      icon: Target,
    },
  ],
  whoWeAre: {
    title: "Who We Are",
    description:
      "We are a dedicated healthcare team committed to making quality care more accessible, personal, and convenient. By combining compassionate people, trusted medical expertise, and modern technology, we create a healthcare experience that puts patients first and supports better care at every step.",
  },
};
