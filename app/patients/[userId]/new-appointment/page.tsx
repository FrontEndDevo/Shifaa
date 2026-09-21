// Next Components:
import Image from "next/image";

// Forms:
import { AppointmentForm } from "@/components/forms/AppointmentForm/AppointmentForm";

// API actions::
import { getPatient } from "@/lib/actions/patient.actions";

// Types
import { SearchParamProps } from "@/types";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

const NewAppointment = async ({ params }: SearchParamProps) => {
  const { userId } = await params;

  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Shifaa />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2026 Shifaa</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
