import { Status } from "@/types";

export const STATUS_STYLES: Record<
  Status,
  { card: string; border: string; text: string }
> = {
  pending: {
    card: "border-blue-500 bg-blue-400 hover:bg-blue-600",
    border: "border-blue-500",
    text: "text-blue-700 dark:text-blue-400",
  },
  scheduled: {
    card: "border-emerald-500 bg-emerald-400 hover:bg-emerald-600",
    border: "border-emerald-500",
    text: "text-emerald-700 dark:text-emerald-400",
  },
  cancelled: {
    card: "border-red-500 bg-red-400 hover:bg-red-600",
    border: "border-red-500",
    text: "text-red-700 dark:text-red-400",
  },
};
