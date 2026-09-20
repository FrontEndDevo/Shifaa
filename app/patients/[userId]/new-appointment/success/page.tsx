// Next Components:
import Image from "next/image";
import Link from "next/link";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// Constants:
import { Doctors } from "@/constants";

// Utilities:
import { formatDateTime } from "@/lib/utils";

// Types:
import { SearchParamProps } from "@/types";

// API
import { getAppointment } from "@/lib/actions/appointment.actions";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

const Success = async ({ params, searchParams }: SearchParamProps) => {
  const { userId } = await params;
  const { appointmentId } = await searchParams;

  const appointment = await getAppointment(appointmentId as string);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician,
  );

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Shifaa />

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment</span> has been
            successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image as string}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button
          variant="outline"
          className="shad-primary-btn px-10 border-none hover:"
        >
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="copyright">© 2026 Shifaa</p>
      </div>
    </div>
  );
};

export default Success;
