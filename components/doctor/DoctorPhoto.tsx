// Next Components:
import Image from "next/image";

// Components:
import DoctorAvailability from "./DoctorAvailability";

// Types:
import { DoctorPhotoProps } from "@/types/doctors.types";

const DoctorPhoto = ({ availableToday, image, name }: DoctorPhotoProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl border-4 border-blue-400 shadow-2xl shadow-blue-700">
      <DoctorAvailability availableToday={availableToday} />
      <Image src={image} alt={name} width={1000} height={1000} />
      <h1 className="text-center text-2xl text-card font-bold my-4">{name}</h1>
    </div>
  );
};

export default DoctorPhoto;
