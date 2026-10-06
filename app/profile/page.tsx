"use client";

// Lucide Icons:
import { PencilIcon } from "lucide-react";

// Shadcn UI:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import QueryWrapper from "@/components/shared/QueryWrapper";
import ProfileAppointments from "@/components/appointments/ProfileAppointments";
import ProfileStatusCount from "@/components/appointments/ProfileStatusCount";
import Footer from "@/components/layout/footer/Footer";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";
import { useGetPatientAppointments } from "@/components/forms/AppointmentForm/hooks/useAppointments";

// Utilities:
import { getInitials } from "@/lib/utils";

const Profile = () => {
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
        errorMessage="Failed to fetch your appointments, Try to refresh page."
      >
        <section className="min-h-dvh bg-muted/50 flex flex-col 2xl:flex-row items-start px-6 py-10 bg-dark-400">
          {/* Profile */}
          <div className="relative mx-auto flex w-full max-w-md flex-col items-center rounded-xl border border-border/55 bg-background px-8 py-10 shadow-[0_0_10px_rgba(0,0,0,0.04)] dark:border-border/75 dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            {/* Edit Profile button */}
            <Tooltip>
              <TooltipTrigger>
                <div className="absolute top-4 right-4 border-2 rounded p-1 border-blue-500 hover:bg-blue-500 transition duration-150">
                  <PencilIcon className="size-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Edit Profile</TooltipContent>
            </Tooltip>

            {/* Avatar Photo */}
            <div className="mb-4 flex items-center gap-4">
              <Avatar className="size-24 border">
                {/* <AvatarImage
                alt="User avatar"
                src="https://github.com/shadcn.png"
              /> */}
                <AvatarFallback className="font-medium text-2xl">
                  {getInitials(patient?.name)}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Essential Information */}
            <div className="text-center">
              <h2 className="font-medium text-2xl tracking-tight">
                {patient?.name}
              </h2>
              <p className="mt-1 text-muted-foreground">{patient?.phone}</p>
            </div>

            {/* Appointments Status */}
            <div className="mt-8 w-full">
              <div className="flex gap-1">
                <h2 className="text-lg font-semibold mb-2 tracking-wider">
                  Appointments:
                </h2>
                <p className="text-xl">{appointments?.total}</p>
              </div>

              <div className="text-center grid grid-cols-3 gap-4">
                <ProfileStatusCount
                  color="blue"
                  count={appointments?.pendingCount}
                  title="pending"
                />

                <ProfileStatusCount
                  color="emerald"
                  count={appointments?.scheduledCount}
                  title="confirmed"
                />

                <ProfileStatusCount
                  color="red"
                  count={appointments?.cancelledCount}
                  title="cancelled"
                />
              </div>
            </div>
          </div>

          <Separator className="bg-blue-400 w-1 h-dvh mx-10 2xl:block hidden" />

          <ProfileAppointments appointments={appointments?.rows} />
        </section>
      </QueryWrapper>

      <Footer />
    </>
  );
};

export default Profile;
