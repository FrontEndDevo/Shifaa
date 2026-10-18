// Lucide Icons:
import { CircleDashedCheck, CircleX } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

const DoctorAvailability = ({
  availableToday,
}: {
  availableToday: boolean;
}) => {
  const t = useTranslations("DoctorDetails");

  return (
    <div className="my-2 flex items-center justify-between gap-4 border-b-2 py-1">
      <p className="font-semibold tracking-wider rtl:tracking-normal text-neutral-800">
        {t("availableToday")}
      </p>
      {availableToday ? (
        <CircleDashedCheck
          aria-label={t("yes")}
          className="h-8 w-8 text-green-400"
        />
      ) : (
        <CircleX aria-label={t("no")} className="h-8 w-8 text-red-400" />
      )}
    </div>
  );
};

export default DoctorAvailability;
