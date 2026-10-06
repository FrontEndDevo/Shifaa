"use client";

// Next Components:
import Image from "next/image";

// Next Hooks:
import { useParams } from "next/navigation";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Lucide Icons:
import { Check, Languages, UserRound } from "lucide-react";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import SectionHeading from "@/components/common/SectionHeading";
import DoctorAvailability from "@/components/doctor/DoctorAvailability";
import EducationAndCertifications from "@/components/doctor/EducationAndCertifications";
import DoctorAdvantages from "@/components/doctor/DoctorAdvantages";
import ServicesAndLanguages from "@/components/doctor/ServicesAndLanguages";
import NavActionButton from "@/components/layout/navbar/NavActionButton";
import Footer from "@/components/layout/footer/Footer";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

const DoctorPage = () => {
  const { doctorId } = useParams();
  const { data } = useGetPatient();

  const doctorInfo = DOCTORS.filter((doc) => doc.doctorId === doctorId);
  const {
    availableToday,
    image,
    name,
    bio,
    specialty,
    experience,
    education,
    certifications,
    services,
    rating,
    languages,
    consultationFee,
  } = doctorInfo[0];
  return (
    <>
      <Navbar />
      <section className="py-20 bg-dark-400">
        <div className="container flex lg:flex-row flex-col items-center gap-6">
          <div className="bg-white p-8 rounded-2xl border-4 border-blue-400 shadow-2xl shadow-blue-700">
            <DoctorAvailability availableToday={availableToday} />
            <Image
              src={image}
              alt={name}
              width={1000}
              height={1000}
              className=""
            />
            <h1 className="text-center text-2xl text-dark-400 font-bold my-4">
              {name}
            </h1>
          </div>

          <div>
            <SectionHeading
              desctiption={bio}
              heading="Meet the doctor"
              icon={UserRound}
              title={`${specialty} with ${experience} Experience.`}
            />

            <div className="w-1/2 mx-auto h-[2px] bg-amber-300 my-6" />

            {/* Education & certifications */}
            <div className="grid gap-4 grid-cols-2 text-center">
              <EducationAndCertifications data={education} title="Education" />

              <EducationAndCertifications
                data={certifications}
                title="Certifications"
              />
            </div>

            <div className="w-1/2 mx-auto h-[2px] bg-cyan-300 my-6" />

            {/* Advantages & Counts */}
            <div className="container">
              <div className="grid grid-cols-2 gap-4">
                <DoctorAdvantages
                  advantage="Years Experience"
                  count={experience}
                  color="text-red-500"
                />

                <DoctorAdvantages
                  advantage="certifications"
                  count={certifications.length}
                  color="text-emerald-500"
                />

                <DoctorAdvantages
                  advantage="services"
                  count={services.length}
                  color="text-blue-500"
                />

                <DoctorAdvantages
                  advantage="rate"
                  count={rating}
                  color="text-yellow-500"
                />
              </div>

              <div className="w-1/2 mx-auto h-[2px] bg-indigo-700 my-6" />

              {/* Services & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start text-center gap-4">
                <ServicesAndLanguages
                  data={services}
                  icon={Check}
                  title="Services"
                />

                <ServicesAndLanguages
                  data={languages}
                  icon={Languages}
                  title="Languages"
                />
              </div>

              <div className="flex items-center md:flex-row flex-col gap-4 justify-between">
                <p className="text-lg font-semibold">
                  Consultation Fee:{" "}
                  <span className="text-green-500">
                    ${consultationFee.toFixed(2)}
                  </span>
                </p>
                <NavActionButton userId={data?.userId} />
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
