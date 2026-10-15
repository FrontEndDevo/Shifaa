// Types:
import { ServicesAndLanguagesProps } from "@/types/doctors.types";

const ServicesAndLanguages = ({
  doctorServicesAndLanguages,
}: {
  doctorServicesAndLanguages: ServicesAndLanguagesProps[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start text-center gap-4">
      {doctorServicesAndLanguages.map(({ title, data, icon: Icon }) => (
        <div key={title}>
          <h4 className="underline text-lg py-1 mb-2 text-emerald-400 font-semibold">
            {title}
          </h4>

          <div className="my-2">
            {data.map((item, i) => (
              <div key={i} className="flex items-center gap-2 my-2">
                <Icon className="w-6 h-6 bg-blue-200 text-blue-500 rounded-full p-1" />
                <p className="text-faint font-semibold text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesAndLanguages;
