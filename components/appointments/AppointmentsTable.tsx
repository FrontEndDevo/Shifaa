// Next Components:
import Image from "next/image";

// Lucide Icons:
import { Edit } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Button } from "../ui/button";

// Utilities:
import { resolveDoctorId } from "@/lib/doctors";

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

// Types:
import { Appointment } from "@/types/appointment.types";

const AppointmentsTable = ({
  primaryPhysician,
  reason,
  note,
  status,
}: Appointment) => {
  const t = useTranslations("Profile");
  const doctors = useLocalizedDoctors();

  const doctor = doctors.find(
    (doc) => doc.doctorId === resolveDoctorId(primaryPhysician),
  );

  return (
    <div className="relative mb-10 w-full rounded-lg border border-line p-6 group-last:pb-4 sm:ps-8">
      {/* Doctor Information */}
      <div className="my-4 flex items-center justify-between border-b border-line py-1">
        <div className="flex items-center gap-2">
          {doctor && (
            <Image
              src={doctor.image}
              width={48}
              height={48}
              alt=""
              className="rounded-full border border-line"
            />
          )}
          <h3 className="text-xl">{doctor?.name ?? primaryPhysician}</h3>
        </div>
        <Button
          aria-label={t("editAppointment")}
          className="text-lg transition duration-100 hover:text-red-400"
          disabled={status !== "pending"}
        >
          <Edit className="h-10 w-10" />
        </Button>
      </div>

      {/* Reason & Notes */}
      <div className="grid grid-cols-1 gap-6 text-center lg:grid-cols-2">
        <div>
          <span className="border-b-2 border-red-500 py-1 text-lg">
            {t("reason")}
          </span>
          <p
            dir="auto"
            className="mt-4 line-clamp-3 text-sm text-faint sm:text-base"
          >
            {reason}
          </p>
        </div>
        <div className="lg:border-s lg:border-line lg:ps-4">
          <span className="border-b-2 border-emerald-500 py-1 text-lg">
            {t("note")}
          </span>
          <p
            dir="auto"
            className="mt-4 line-clamp-3 text-sm text-faint sm:text-base"
          >
            {note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTable;
