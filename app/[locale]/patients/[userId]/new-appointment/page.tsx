"use client";

// React Hooks:
import { useEffect } from "react";

// Next Components:
import Image from "next/image";
import { useParams } from "next/navigation";

// Forms:
import { AppointmentForm } from "@/components/forms/AppointmentForm/AppointmentForm";

// API actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

// Components:
import QueryWrapper from "@/components/shared/QueryWrapper";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const NewAppointment = () => {
  const params = useParams();

  const userId = params.userId as string;

  const { data: patient, isLoading, isError } = useGetPatient();

  useEffect(() => {
    if (isError)
      toast.add({
        type: "error",
        title: "Failed to load patient data.",
        description: "Try to refresh the page.",
      });
  }, [isError]);

  return (
    <>
      <Navbar />

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

      <Footer />
    </>
  );
};

export default NewAppointment;
