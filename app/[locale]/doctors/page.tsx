"use client";

// React Hooks:
import { useState, useMemo } from "react";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Banner from "@/components/common/Banner";
import CarouselWrapper from "@/components/shared/CarouselWrapper";
import DoctorCard from "@/components/doctor/DoctorCard";
import PricingPlan from "@/components/pricingplan/PricingPlan";
import Footer from "@/components/layout/footer/Footer";

// Next Intl:
import { useTranslations } from "next-intl";

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

const Doctors = () => {
  const t = useTranslations("DoctorsPage");

  const doctors = useLocalizedDoctors();

  const [query, setQuery] = useState("");

  const currentDoctors = useMemo(() => {
    const target = query.toLowerCase().trim();

    if (!target) return doctors;

    return doctors.filter((doc) => doc.name.toLowerCase().includes(target));
  }, [doctors, query]);

  const findDoctorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Banner
        preMessage={t("banner.pre")}
        button={t("banner.button")}
        link="contact"
        postMessage={t("banner.post")}
      />
      <section className="mx-auto max-w-5xl px-14 py-20">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-end">
          <div className="text-center lg:text-start">
            <h2 className="text-3xl font-medium tracking-tight rtl:tracking-normal text-amber-500">
              {t.rich("title", {
                brand: (chunks) => (
                  <span className="text-blue-500">{chunks}</span>
                ),
              })}
            </h2>
            <p className="mt-2 text-pretty text-lg leading-snug text-soft">
              {t("subtitle")}
            </p>
          </div>

          <input
            onChange={findDoctorHandler}
            type="text"
            name="find-doctor"
            id="find-doctor"
            aria-label={t("searchPlaceholder")}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded bg-line px-4 py-1 text-main outline-none lg:w-fit dark:focus:shadow-md dark:focus:shadow-blue-500"
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
            <p className="text-center text-red-400">{t("notFound")}</p>
          </div>
        )}
      </section>

      <PricingPlan />

      <Footer />
    </>
  );
};

export default Doctors;
