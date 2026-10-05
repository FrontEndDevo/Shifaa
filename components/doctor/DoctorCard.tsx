// Next Components:
import Link from "next/link";
import Image from "next/image";

// Types:
import { Doctor } from "@/types/doctors.types";

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="border rounded-t-lg">
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={1000}
        height={1000}
        className="rounded-t-lg max-h-48"
      />

      <div className="px-2 text-center">
        <h2 className="text-md my-2 font-bold capitalize">{doctor.name}</h2>
        <span className="text-sm capitalize text-blue-500 font-semibold">
          {doctor.specialty}
        </span>
        <div className="flex justify-between items-center my-2 flex-col lg:flex-row">
          <p className="text-sm">consultation Fee:</p>
          <p className="text-xs text-green-400">
            ${doctor.consultationFee.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={`/doctors/${doctor.doctorId}/doctor`}
          className="m-2 bg-blue-500 rounded px-2 py-1 font-semibold hover:bg-blue-700 transition duration-150"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
