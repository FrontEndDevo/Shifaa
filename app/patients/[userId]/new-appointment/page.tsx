"use client";

// Next Components:
import Image from "next/image";
import { useParams } from "next/navigation";

// Forms:
import { AppointmentForm } from "@/components/forms/AppointmentForm/AppointmentForm";

// Shadcn UI:
import { Spinner } from "@/components/ui/spinner";

// API actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";
import QueryWrapper from "@/components/shared/QueryWrapper";

const NewAppointment = () => {
  const params = useParams();

  const userId = params.userId as string;

  const { data: patient, isLoading, isError } = useGetPatient(userId);

  return (
    <QueryWrapper
      isLoading={isLoading}
      isError={isError}
      data={patient}
      errorMessage="Failed to load patient information."
    >
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
    </QueryWrapper>
  );
};

export default NewAppointment;
