"use client";

// Lucide Icons:
import { PencilIcon } from "lucide-react";
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import QueryWrapper from "@/components/shared/QueryWrapper";
import ProfileAppointments from "@/components/appointments/ProfileAppointments";
import ProfileStatusCount from "@/components/appointments/ProfileStatusCount";
import Footer from "@/components/layout/footer/Footer";

// Custom Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// API Actions Hooks:
import { useGetPatientAppointments } from "@/components/forms/AppointmentForm/hooks/useAppointments";

// Utilities:
import { getInitials } from "@/lib/utils";

const Profile = () => {
  const t = useTranslations("Profile");
  const { data: patient } = useGetPatient();

  const {
    data: appointments,
    isLoading,
    isError,
  } = useGetPatientAppointments(patient?.userId);

  return (
    <>
      <Navbar />

      <QueryWrapper
        isLoading={isLoading}
        isError={isError}
        data={appointments}
        errorMessage={t("loadError")}
      >
        <section className="flex min-h-dvh flex-col items-start bg-card px-6 py-10 2xl:flex-row">
          {/* Profile */}
          <div className="relative mx-auto flex w-full max-w-md flex-col items-center rounded-xl border border-line bg-page px-8 py-10 shadow-[0_0_10px_rgba(0,0,0,0.04)] dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            {/* Edit Profile button */}
            <Tooltip>
              <TooltipTrigger>
                <div className="absolute end-4 top-4 rounded border-2 border-blue-500 p-1 transition duration-150 hover:bg-blue-500">
                  <PencilIcon className="size-4" />
                  <span className="sr-only">{t("editProfile")}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>{t("editProfile")}</TooltipContent>
            </Tooltip>

            {/* Avatar Photo */}
            <div className="mb-4 flex items-center gap-4">
              <Avatar className="size-24 border border-line">
                <AvatarFallback className="text-2xl font-medium">
                  {getInitials(patient?.name)}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Essential Information */}
            <div className="text-center">
              <h2 className="text-2xl font-medium tracking-tight rtl:tracking-normal">
                {patient?.name}
              </h2>
              <p dir="ltr" className="mt-1 text-faint">
                {patient?.phone}
              </p>
            </div>

            {/* Appointments Status */}
            <div className="mt-8 w-full">
              <div className="flex gap-1">
                <h2 className="mb-2 text-lg font-semibold tracking-wider rtl:tracking-normal">
                  {t("appointments")}
                </h2>
                <p className="text-xl">{appointments?.total}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <ProfileStatusCount
                  status="pending"
                  count={appointments?.pendingCount}
                />

                <ProfileStatusCount
                  status="scheduled"
                  count={appointments?.scheduledCount}
                />

                <ProfileStatusCount
                  status="cancelled"
                  count={appointments?.cancelledCount}
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="mx-10 hidden h-dvh w-1 bg-blue-400 2xl:block"
          />

          <ProfileAppointments appointments={appointments?.rows} />
        </section>
      </QueryWrapper>

      <Footer />
    </>
  );
};

export default Profile;
