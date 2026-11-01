// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { cn } from "@/lib/utils";

// Constants:
import { STATUS_STYLES } from "@/constants/AppointmentStatus";

// Types:
import { Status } from "@/types";

type ProfileStatusCountProps = {
  status: Status;
  count?: number;
};

const ProfileStatusCount = ({ status, count = 0 }: ProfileStatusCountProps) => {
  const t = useTranslations("AppointmentStatus");

  return (
    <div
      className={cn(
        "rounded border-2 p-1 transition duration-150",
        STATUS_STYLES[status].card,
      )}
    >
      <h4 className="font-mono text-sm font-semibold capitalize italic lg:text-base xl:text-lg rtl:font-sans rtl:not-italic">
        {t(status)}
      </h4>
      <p className="mx-auto mt-1 w-fit rounded-full border-2 border-main/40 px-2 py-px font-bold">
        {count}
      </p>
    </div>
  );
};

export default ProfileStatusCount;
