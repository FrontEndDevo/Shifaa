// Next Components:
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

// Customised Next Components:
import { Link } from "@/i18n/navigation";

// Types:
import type { Doctor } from "@/types/doctors.types";

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const t = useTranslations("DoctorsPage.card");

  return (
    <div className="rounded-t-lg border border-line">
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={1000}
        height={1000}
        className="rounded-t-lg max-h-48"
      />

      <div className="px-2 text-center">
        <h2 className="text-xs md:text-md my-1 md:my-2 font-bold capitalize">
          {doctor.name}
        </h2>
        <span className="text-xs md:text-sm capitalize text-blue-500 font-semibold">
          {doctor.specialty}
        </span>
        <div className="flex justify-between items-center my-1 md:my-2 flex-col lg:flex-row">
          <p className="text-xs md:text-sm">{t("consultationFee")}</p>
          <p dir="ltr" className="text-xs text-green-500">
            ${doctor.consultationFee.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={`/doctors/${doctor.doctorId}/doctor`}
          className="m-2 bg-blue-500 text-page text-sm md:text-base rounded px-2 py-1 font-semibold hover:bg-blue-700 transition duration-150"
        >
          {t("readMore")}
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
