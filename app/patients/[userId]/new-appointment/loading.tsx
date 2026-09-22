import SpinnerButton from "@/components/shared/SpinnerButton";

export default function NewAppointmentLoading() {
  return (
    <div className="flex justify-center items-center size-full h-screen w-full">
      <SpinnerButton />
    </div>
  );
}
