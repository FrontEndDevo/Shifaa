"use client";

// Next Components:
import Image from "next/image";
import Link from "next/link";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Utilities:
import { formatDateTime } from "@/lib/utils";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

// Hooks:
import useSuccessPage from "@/hooks/useSuccessPage";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import QueryWrapper from "@/components/shared/QueryWrapper";
import Footer from "@/components/layout/footer/Footer";

const Success = () => {
  const { appointment, userId, isLoading, isError } = useSuccessPage();

  const doctor = DOCTORS.find(
    (doctor) => doctor.name === appointment?.primaryPhysician,
  );

  return (
    <>
      <Navbar />

      <QueryWrapper
        isLoading={isLoading}
        isError={isError}
        data={appointment}
        errorMessage="Failed to load appointment details."
      >
        <div className=" flex h-screen max-h-screen px-[5%]">
          <div className="success-img">
            <Shifaa />

            <section className="flex flex-col items-center">
              <Image
                src="/assets/gifs/success.gif"
                height={300}
                width={280}
                alt="success"
              />
              <h2 className="header mb-6 max-w-[600px] text-center">
                Your <span className="text-green-500">appointment</span> has
                been successfully submitted!
              </h2>
              <p>We&apos;ll be in touch shortly to confirm.</p>
            </section>

            <section className="request-details">
              <p>Appointment details: </p>
              <div className="flex items-center gap-3">
                <Image
                  src={doctor?.image as string}
                  alt="doctor"
                  width={100}
                  height={100}
                  className="size-12 rounded-full"
                />
                <p className="whitespace-nowrap">{doctor?.name}</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/icons/calendar.svg"
                  height={24}
                  width={24}
                  alt="calendar"
                />
                <p> {formatDateTime(appointment?.schedule).dateTime}</p>
              </div>
            </section>

            <Button
              variant="outline"
              className="shad-primary-btn px-10 border-none hover:"
            >
              <Link href={`/patients/${userId}/new-appointment`}>
                New Appointment
              </Link>
            </Button>

            <p className="copyright">© 2026 Shifaa</p>
          </div>
        </div>
      </QueryWrapper>

      <Footer />
    </>
  );
};

export default Success;
