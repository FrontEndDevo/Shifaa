import {
  CalendarDays,
  Info,
  Stethoscope,
  History,
  Phone,
  BadgeQuestionMark,
} from "lucide-react";

export const NAV_MENU = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "About",
    url: "/about",
    items: [
      {
        title: "About us",
        description: "Learn more about our healthcare platform",
        icon: Info,
        url: "/about",
      },
      {
        title: "Contact us",
        description: "Get in touch with our healthcare team",
        icon: Phone,
        url: "/contact",
      },
      {
        title: "FAQs",
        description: "Let us answer all your questions about our services",
        icon: BadgeQuestionMark,
        url: "/faqs",
      },
    ],
  },

  {
    title: "Doctors",
    url: "/doctors",
    items: [
      {
        title: "Find a Doctor",
        description: "Browse doctors and find the right specialist for you",
        icon: Stethoscope,
        url: "/doctors",
      },
      // {
      //   title: "Specialties",
      //   description: "Explore our available medical specialties",
      //   icon: Stethoscope,
      //   url: "/specialties",
      // },
    ],
  },

  // {
  //   title: "Appointments",
  //   url: "/my-appointments",
  //   items: [
  //     {
  //       title: "My Appointments",
  //       description: "View and manage your upcoming appointments",
  //       icon: CalendarDays,
  //       url: "/my-appointments",
  //     },
  //     {
  //       title: "Appointment History",
  //       description: "View your previous appointments",
  //       icon: History,
  //       url: "/my-appointments/history",
  //     },
  //   ],
  // },
];
