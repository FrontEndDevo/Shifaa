// Types:
import { EducationAndCertificationsProps } from "@/types/doctors.types";

const EducationAndCertifications = ({
  data,
  title,
}: EducationAndCertificationsProps) => {
  return (
    <div>
      <h4 className="underline text-lg py-1 mb-2 text-blue-400 font-semibold">
        {title}
      </h4>
      <div className="flex gap-4 flex-col items-center">
        {data.map((item, i) => (
          <p
            key={i}
            className="text-center text-sm text-dark-300 font-semibold bg-gray-100 px-2 py-1 rounded"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EducationAndCertifications;
