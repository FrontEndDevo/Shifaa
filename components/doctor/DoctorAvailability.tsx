// Lucide Icons:
import { CircleDashedCheck, CircleX } from "lucide-react";

const DoctorAvailability = ({
  availableToday,
}: {
  availableToday: boolean;
}) => {
  return (
    <div className="flex items-center gap-4 justify-between my-2 border-b-2 py-1">
      <p className="font-semibold tracking-wider text-neutral-800">
        Available Today?
      </p>
      {availableToday ? (
        <CircleDashedCheck className="h-8 w-8 text-green-400" />
      ) : (
        <CircleX className="h-8 w-8 text-red-400" />
      )}
    </div>
  );
};

export default DoctorAvailability;
