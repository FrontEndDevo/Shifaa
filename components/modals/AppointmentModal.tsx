"use client";

// React Hooks:
import { useState } from "react";

// Shadcn UI:
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

// Components:
import { AppointmentForm } from "../forms/AppointmentForm/AppointmentForm";

// Types:
import { TAppointmentModalProps } from "@/types/appointment.types";

const AppointmentModal = ({
  type = "schedule",
  appointment,
  title,
  description,
}: TAppointmentModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500 hover:text-green-400"}`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <AppointmentForm
          userId={appointment?.userId}
          patientId={appointment?.patient.$id}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
