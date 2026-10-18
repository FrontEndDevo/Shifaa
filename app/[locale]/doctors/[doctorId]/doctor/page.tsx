"use client";

// Next Components:
import { useParams, notFound } from "next/navigation";

// Lucide Icons:
import { UserRound } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Custom Hooks:
import { useDoctorDetails } from "@/hooks/useDoctorDetails";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import SectionHeading from "@/components/common/SectionHeading";
import DoctorPhoto from "@/components/doctor/DoctorPhoto";
import EducationAndCertifications from "@/components/doctor/EducationAndCertifications";
import DoctorAdvantages from "@/components/doctor/DoctorAdvantages";
import ServicesAndLanguages from "@/components/doctor/ServicesAndLanguages";
import NavActionButton from "@/components/layout/navbar/NavActionButton";
import Footer from "@/components/layout/footer/Footer";

const DoctorPage = () => {
  const t = useTranslations("DoctorDetails");

  const { doctorId } = useParams<{ doctorId: string }>();

  const { data: patient } = useGetPatient();

  const details = useDoctorDetails(doctorId);

  if (!details) notFound();

  const {
    doctor: {
      availableToday,
      name,
      image,
      bio,
      consultationFee,
      experience,
      specialty,
    },
    doctorEducationAndCertifications,
    doctorAdvantages,
    doctorServicesAndLanguages,
  } = details;

  return (
    <>
      <Navbar />
      <section className="bg-card py-20">
        <div className="container flex flex-col items-center gap-6 lg:flex-row">
          <DoctorPhoto
            availableToday={availableToday}
            image={image}
            name={name}
          />

          <div>
            <SectionHeading
              icon={UserRound}
              description={bio}
              heading={t("meet")}
              title={t("title", { specialty, years: experience })}
            />

            <div className="mx-auto my-6 h-[2px] w-1/2 bg-amber-300" />

            {/* Education & certifications */}
            <EducationAndCertifications
              doctorEducationAndCertifications={
                doctorEducationAndCertifications
              }
            />

            <div className="mx-auto my-6 h-[2px] w-1/2 bg-cyan-300" />

            {/* Advantages & Counts */}
            <div className="container">
              <DoctorAdvantages doctorAdvantages={doctorAdvantages} />

              <div className="mx-auto my-6 h-[2px] w-1/2 bg-indigo-700" />

              {/* Services & Languages */}
              <ServicesAndLanguages
                doctorServicesAndLanguages={doctorServicesAndLanguages}
              />

              <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-lg font-semibold">
                  {t("consultationFee")}{" "}
                  <span dir="ltr" className="inline-block text-green-500">
                    ${consultationFee.toFixed(2)}
                  </span>
                </p>

                <NavActionButton
                  userId={patient?.userId}
                  status={patient?.status}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorPage;
