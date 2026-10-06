// Next Components:
import Image from "next/image";

// Types:
import { Appointment } from "@/types/appointment.types";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Shadcn UI:
import { Button } from "../ui/button";

// Lucide Icons:
import { Edit } from "lucide-react";

const AppointmentsTable = ({
  primaryPhysician,
  reason,
  note,
  status,
}: Appointment) => {
  const doctor = DOCTORS.filter((doc) => doc.name === primaryPhysician)[0];

  return (
    <div className="relative border rounded-lg p-6 mb-10 group-last:pb-4 sm:pl-8 w-full">
      {/* Timeline Dot */}

      {/* Doctor Information */}
      <div className="flex justify-between items-center my-4 border-b py-1">
        <div className="flex items-center gap-2">
          <Image
            src={doctor.image}
            width={48}
            height={48}
            alt={doctor.name}
            className="rounded-full border border-dark-500"
          />
          <h3 className="text-xl">{primaryPhysician}</h3>
        </div>
        <Button
          className="text-lg hover:text-red-400 duration-100 transition"
          disabled={status !== "pending"}
        >
          <Edit className="w-10 h-10" />
        </Button>
      </div>

      {/* Reason & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center">
        <div>
          <span className="text-lg border-b-2 border-red-500 py-1">Reason</span>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 line-clamp-3">
            {reason}
          </p>
        </div>
        <div className="lg:border-l lg:pl-4">
          <span className="text-lg border-b-2 border-emerald-500 py-1">
            Note
          </span>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 line-clamp-3">
            {note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTable;
