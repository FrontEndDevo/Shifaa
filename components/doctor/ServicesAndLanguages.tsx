// Types:
import { ServicesAndLanguagesProps } from "@/types/doctors.types";

const ServicesAndLanguages = ({
  data,
  title,
  icon: Icon,
}: ServicesAndLanguagesProps) => {
  return (
    <div>
      <h4 className="underline text-lg py-1 mb-2 text-emerald-400 font-semibold">
        {title}
      </h4>
      <div className="my-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2 my-2">
            <Icon className="w-6 h-6 bg-blue-200 text-blue-500 rounded-full p-1" />
            <p className="text-dark-600 font-semibold text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAndLanguages;
