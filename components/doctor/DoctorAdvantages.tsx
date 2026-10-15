// Types:
import { DoctorAdvantagesProps } from "@/types/doctors.types";

const DoctorAdvantages = ({
  doctorAdvantages,
}: {
  doctorAdvantages: DoctorAdvantagesProps[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {doctorAdvantages.map(({ advantage, count, color }) => (
        <div key={advantage} className="bg-line p-2 rounded-lg">
          <h3 className={`${color} font-bold text-xl`}>{count}</h3>
          <p className="capitalize text-base mt-2 font-semibold">{advantage}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorAdvantages;
