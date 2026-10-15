import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Lucide Icons:
import { Check, Languages, UserRound } from "lucide-react";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Types:
import { BlogArticle } from "@/types/articles.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name?: string) => {
  if (!name) return "P";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions,
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions,
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions,
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions,
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export const blogPostsFilter = ({
  posts,
  filter,
}: {
  posts: BlogArticle[];
  filter: string;
}) => {
  switch (filter) {
    case "Latest":
      return posts.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
    case "Category":
      return posts.sort((a, b) =>
        String(a.category).localeCompare(String(b.category), "en"),
      );
    case "Popular":
      return posts.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
  }
};

export const findDoctor = ({ doctorId }: { doctorId: string }) => {
  const doctorInfo = DOCTORS.filter((doc) => doc.doctorId === doctorId)[0];

  // Collect all doctor education & certifications to render them.
  const doctorEducationAndCertifications = [
    {
      data: doctorInfo.education,
      title: "Education",
    },
    {
      data: doctorInfo.certifications,
      title: "Certifications",
    },
  ];

  // Collect all doctor advantages to render them.
  const doctorAdvantages = [
    {
      advantage: "Years Experience",
      count: doctorInfo.experience,
      color: "text-red-500",
    },
    {
      advantage: "certifications",
      count: doctorInfo.certifications.length,
      color: "text-emerald-500",
    },
    {
      advantage: "services",
      count: doctorInfo.services.length,
      color: "text-blue-500",
    },
    {
      advantage: "rate",
      count: doctorInfo.rating,
      color: "text-yellow-500",
    },
  ];

  // Collect all doctor services & languages to render them.
  const doctorServicesAndLanguages = [
    {
      data: doctorInfo.services,
      icon: Check,
      title: "Services",
    },
    {
      data: doctorInfo.languages,
      icon: Languages,
      title: "Languages",
    },
  ];

  return {
    doctor: doctorInfo,
    doctorEducationAndCertifications,
    doctorAdvantages,
    doctorServicesAndLanguages,
  };
};
