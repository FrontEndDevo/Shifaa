// Types:
import { EducationAndCertificationsProps } from "@/types/doctors.types";

const EducationAndCertifications = ({
  doctorEducationAndCertifications,
}: {
  doctorEducationAndCertifications: EducationAndCertificationsProps[];
}) => {
  return (
    <div className="grid gap-4 grid-cols-2 text-center">
      {doctorEducationAndCertifications.map(({ title, data }) => (
        <div key={title}>
          <h4 className="underline text-lg py-1 mb-2 text-blue-400 font-semibold">
            {title}
          </h4>
          <div className="flex gap-4 flex-col items-center">
            {data.map((item, i) => (
              <p
                key={i}
                className="text-center text-sm text-page bg-main font-semibold px-2 py-1 rounded"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationAndCertifications;
