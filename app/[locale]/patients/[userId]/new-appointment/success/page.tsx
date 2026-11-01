"use client";

// Next Components:
import Image from "next/image";

// Next Intl:
import { useFormatter, useTranslations } from "next-intl";

// Customised Next Components:
import { Link } from "@/i18n/navigation";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// Utilities:
import { resolveDoctorId } from "@/lib/doctors";
// Constants:

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

// Hooks:
import useSuccessPage from "@/hooks/useSuccessPage";
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import QueryWrapper from "@/components/shared/QueryWrapper";
import Footer from "@/components/layout/footer/Footer";

const Success = () => {
  const t = useTranslations("Success");
  const tFooter = useTranslations("Footer");
  const format = useFormatter();
  const doctors = useLocalizedDoctors();

  const { appointment, userId, isLoading, isError } = useSuccessPage();

  const doctor = appointment
    ? doctors.find(
        (doc) => doc.doctorId === resolveDoctorId(appointment.primaryPhysician),
      )
    : undefined;

  const scheduleText = appointment
    ? format.dateTime(new Date(appointment.schedule), {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : "";

  return (
    <>
      <Navbar />

      <QueryWrapper
        isLoading={isLoading}
        isError={isError}
        data={appointment}
        errorMessage={t("loadError")}
      >
        <div className="flex h-screen max-h-screen px-[5%]">
          <div className="success-img">
            <Shifaa />

            <section className="flex flex-col items-center">
              <Image
                src="/assets/gifs/success.gif"
                height={300}
                width={280}
                alt={t("imageAlt")}
              />
              <h2 className="header mb-6 max-w-[600px] text-center">
                {t.rich("title", {
                  highlight: (chunks) => (
                    <span className="text-green-500">{chunks}</span>
                  ),
                })}
              </h2>
              <p>{t("followUp")}</p>
            </section>

            <section className="request-details">
              <p>{t("details")}</p>
              {doctor && (
                <div className="flex items-center gap-3">
                  <Image
                    src={doctor.image}
                    alt=""
                    width={100}
                    height={100}
                    className="size-12 rounded-full"
                  />
                  <p className="whitespace-nowrap">{doctor.name}</p>
                </div>
              )}
              <div className="flex gap-2">
                <Image
                  src="/assets/icons/calendar.svg"
                  height={24}
                  width={24}
                  alt=""
                />
                <p>{scheduleText}</p>
              </div>
            </section>

            <Button
              variant="outline"
              className="shad-primary-btn border-none px-10"
            >
              <Link href={`/patients/${userId}/new-appointment`}>
                {t("newAppointment")}
              </Link>
            </Button>

            <p className="copyright">{tFooter("copyright")}</p>
          </div>
        </div>
      </QueryWrapper>

      <Footer />
    </>
  );
};

export default Success;
