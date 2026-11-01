// Next Intl:
import { useFormatter, useTranslations } from "next-intl";

// Shadcn UI:
import { cn } from "@/lib/utils";

// Constants:
import { STATUS_STYLES } from "@/constants/AppointmentStatus";

// Types:
import { Appointment } from "@/types/appointment.types";

// Components:
import AppointmentsTable from "./AppointmentsTable";

type ProfileAppointmentsProps = {
  appointments?: Appointment[];
};

const ProfileAppointments = ({ appointments }: ProfileAppointmentsProps) => {
  const t = useTranslations("AppointmentStatus");
  const format = useFormatter();

  return (
    <div className="w-full max-w-(--breakpoint-sm) px-6 py-12 md:mx-auto md:py-20">
      <div className="relative">
        {appointments?.map((appointment) => {
          const styles = STATUS_STYLES[appointment.status];

          const appointmentDate = format.dateTime(
            new Date(appointment.schedule),
            {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
          );

          return (
            <div className="group relative" key={appointment.$id}>
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-10">
                {/* Content */}
                <div
                  className={cn(
                    "flex shrink-0 flex-col gap-2 border-b py-1 text-center",
                    styles.border,
                  )}
                >
                  <h6 className={cn("text-lg font-semibold", styles.text)}>
                    {t(appointment.status)}
                  </h6>
                  <span className="text-xs text-faint sm:text-sm">
                    {appointmentDate}
                  </span>
                </div>

                <AppointmentsTable {...appointment} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileAppointments;
