// Types:
import { DoctorAdvantagesProps } from "@/types/doctors.types";

const DoctorAdvantages = ({
  count,
  advantage,
  color,
}: DoctorAdvantagesProps) => {
  return (
    <div className="bg-dark-500 p-2 rounded-lg">
      <h3 className={`${color} font-bold text-xl`}>{count}</h3>
      <p className="capitalize text-base mt-2 font-semibold">{advantage}</p>
    </div>
  );
};

export default DoctorAdvantages;
