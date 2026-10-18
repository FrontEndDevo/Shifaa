"use client";

// Next Hooks:
import { useParams } from "next/navigation";

// Lucide Icons:
import { UserRound } from "lucide-react";

// Utilities:
import { findDoctor } from "@/lib/utils";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import SectionHeading from "@/components/common/SectionHeading";
import DoctorPhoto from "@/components/doctor/DoctorPhoto";
import EducationAndCertifications from "@/components/doctor/EducationAndCertifications";
import DoctorAdvantages from "@/components/doctor/DoctorAdvantages";
import ServicesAndLanguages from "@/components/doctor/ServicesAndLanguages";
import NavActionButton from "@/components/layout/navbar/NavActionButton";
import Footer from "@/components/layout/footer/Footer";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

const DoctorPage = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const { data: patient } = useGetPatient();

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
  } = findDoctor({ doctorId });

  return (
    <>
      <Navbar />
      <section className="py-20 bg-card">
        <div className="container flex lg:flex-row flex-col items-center gap-6">
          <DoctorPhoto
            availableToday={availableToday}
            image={image}
            name={name}
          />

          <div>
            <SectionHeading
              icon={UserRound}
              description={bio}
              heading="Meet the doctor"
              title={`${specialty} with ${experience} Experience.`}
            />

            <div className="w-1/2 mx-auto h-[2px] bg-amber-300 my-6" />

            {/* Education & certifications */}
            <EducationAndCertifications
              doctorEducationAndCertifications={
                doctorEducationAndCertifications
              }
            />

            <div className="w-1/2 mx-auto h-[2px] bg-cyan-300 my-6" />

            {/* Advantages & Counts */}
            <div className="container">
              <DoctorAdvantages doctorAdvantages={doctorAdvantages} />

              <div className="w-1/2 mx-auto h-[2px] bg-indigo-700 my-6" />

              {/* Services & Languages */}
              <ServicesAndLanguages
                doctorServicesAndLanguages={doctorServicesAndLanguages}
              />

              <div className="flex items-center md:flex-row mt-4 flex-col gap-4 justify-between">
                <p className="text-lg font-semibold">
                  Consultation Fee:{" "}
                  <span className="text-green-500">
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
