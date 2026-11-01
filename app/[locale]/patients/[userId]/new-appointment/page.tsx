"use client";

// React Hooks:
import { useEffect } from "react";

// Next Components:
import Image from "next/image";

// Next Hooks:
import { useParams } from "next/navigation";

// Next Intl:
import { useTranslations } from "next-intl";

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
  const t = useTranslations("NewAppointment");
  const tFooter = useTranslations("Footer");

  const params = useParams();

  const userId = params.userId as string;

  const { data: patient, isLoading, isError } = useGetPatient();

  useEffect(() => {
    if (isError)
      toast.add({
        type: "error",
        title: t("toast.title"),
        description: t("toast.description"),
      });
  }, [isError, t]);

  return (
    <>
      <Navbar />

      <QueryWrapper
        isLoading={isLoading}
        isError={isError}
        data={patient}
        errorMessage={t("loadError")}
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

              <p className="copyright mt-10 py-12">{tFooter("copyright")}</p>
            </div>
          </section>

          <Image
            src="/assets/images/appointment-img.png"
            height={1500}
            width={1500}
            alt={t("imageAlt")}
            className="side-img max-w-[390px] bg-bottom"
          />
        </div>
      </QueryWrapper>

      <Footer />
    </>
  );
};

export default NewAppointment;
