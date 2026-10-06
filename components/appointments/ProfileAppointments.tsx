// Types:
import { Appointment } from "@/types/appointment.types";

// Components:
import AppointmentsTable from "./AppointmentsTable";

// Utilities:
import { formatDateTime } from "@/lib/utils";

type ProfileAppointmentsProps = {
  appointments: Appointment[];
};

const ProfileAppointments = ({ appointments }: ProfileAppointmentsProps) => {
  return (
    <div className="max-w-(--breakpoint-sm) px-6 py-12 md:mx-auto md:py-20 w-full">
      <div className="relative">
        {appointments?.map((appointment, index) => {
          const statusColor =
            appointment.status === "pending"
              ? "blue"
              : appointment.status === "cancelled"
                ? "red"
                : "emerald";

          const appointmentDate = formatDateTime(appointment.schedule).dateTime;

          return (
            <div className="group relative" key={index}>
              <div className="flex items-center lg:items-start flex-col lg:flex-row gap-4 lg:gap-10">
                {/* Content */}
                <div
                  className={`flex shrink-0 flex-col gap-2 text-center border-b py-1 border-${statusColor}-500`}
                >
                  <h6
                    className={`capitalize font-semibold text-lg text-${statusColor}-700`}
                  >
                    {appointment.status}
                  </h6>
                  <span className="text-muted-foreground text-xs sm:text-sm">
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
