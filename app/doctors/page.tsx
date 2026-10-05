"use client";

// React Hooks:
import { useState } from "react";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Banner from "@/components/common/Banner";
import CarouselWrapper from "@/components/shared/CarouselWrapper";
import DoctorCard from "@/components/doctor/DoctorCard";
import PricingPlan from "@/components/pricingplan/PricingPlan";
import Footer from "@/components/layout/footer/Footer";

const Doctors = () => {
  const [currentDoctors, setCurrentDoctors] = useState(DOCTORS);

  const findDoctorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetDoctor = e.target.value.toLowerCase().trim();

    if (!targetDoctor) {
      setCurrentDoctors(DOCTORS);
      return;
    }

    const filteredDoctors = DOCTORS.filter((doc) =>
      doc.name.toLowerCase().includes(targetDoctor),
    );

    setCurrentDoctors(filteredDoctors);
  };

  return (
    <>
      <Navbar />
      <Banner
        preMessage="Having a problem with booking?"
        button="Contact us"
        link="contact"
        postMessage="to help you booking an appointment faster."
      />
      <section className="mx-auto max-w-5xl px-14 py-20">
        <div className="flex items-center gap-4 lg:items-end justify-between flex-col lg:flex-row">
          <div className="text-center lg:text-start">
            <h2 className="font-medium text-3xl tracking-tight text-amber-500">
              <span className="text-blue-500">Shifaa</span> Doctors
            </h2>
            <p className="mt-2 text-pretty text-lg text-muted-foreground leading-snug">
              Let us meet you with the suitable doctor
            </p>
          </div>

          <input
            onChange={findDoctorHandler}
            type="text"
            name="find-doctor"
            id="find-doctor"
            placeholder="find a doctor"
            className="px-4 py-1 rounded bg-dark-500 text-white outline-none focus:shadow-md focus:shadow-blue-500 w-full lg:w-fit"
          />
        </div>

        <CarouselWrapper
          opts={{
            loop: true,
            align: "center",
          }}
        >
          {currentDoctors.length !== 0 &&
            currentDoctors.map((doctor) => (
              <DoctorCard key={doctor.doctorId} doctor={doctor} />
            ))}
        </CarouselWrapper>

        {currentDoctors.length === 0 && (
          <div className="w-full">
            <p className="text-center text-red-400">No doctors found.</p>
          </div>
        )}
      </section>

      <PricingPlan />

      <Footer />
    </>
  );
};

export default Doctors;
