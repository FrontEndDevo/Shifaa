// Next Components:
import Image from "next/image";

// Constants:
import { StatusIcon } from "@/constants";

// Types:
import { Status } from "@/types";

// Styling:
import clsx from "clsx";

const StatusBadge = ({ status }: { status: Status }) => {
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
        alt={status}
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-gray-200 dark:text-green-500": status === "scheduled",
          "text-gray-200 dark:text-blue-500": status === "pending",
          "text-gray-200 dark:text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;
