// Next Components:
import Image from "next/image";

// Styling:
import clsx from "clsx";

// Next Intl:
import { useTranslations } from "next-intl";

// Constants:
import { StatusIcon } from "@/constants";

// Types:
import  { Status } from "@/types";

const StatusBadge = ({ status }: { status: Status }) => {
  const t = useTranslations("AppointmentStatus");

  return (
    <div
      className={clsx("status-badge mx-auto", {
        "bg-green-900 dark:bg-green-600": status === "scheduled",
        "bg-blue-600 dark:bg-blue-900": status === "pending",
        "bg-red-900 dark:bg-red-600": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt=""
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold", {
          "text-gray-200 dark:text-green-500": status === "scheduled",
          "text-gray-200 dark:text-blue-500": status === "pending",
          "text-gray-200 dark:text-red-500": status === "cancelled",
        })}
      >
        {t(status)}
      </p>
    </div>
  );
};

export default StatusBadge;
