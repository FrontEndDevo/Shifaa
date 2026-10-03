// Lucide Icons:
import { Star } from "lucide-react";

// Types:
import { WHY_CHOOSE_US_DATA } from "@/constants/WhyChooseUsSection";

const WhyChooseUs = () => {
  return (
    <section className="container text-center py-20 bg-dark-400">
      <div>
        <div className="bg-red-200 mx-auto py-1 px-4 rounded-full flex gap-1 w-fit">
          <Star className="h-5 w-5 text-red-400" />
          <p className="text-sm uppercase text-red-700 font-semibold tracking-wider">
            Why Choose Us
          </p>
        </div>

        <div className="my-10">
          <h3 className="text-xl font-bold mb-2">
            The Shifaa healthcare Difference
          </h3>
          <p className="text-base text-gray-500 mx-auto max-w-xl mb-2">
            Excellence in cardiac care with a patient-first approach backed by
            cutting-edge technology.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {WHY_CHOOSE_US_DATA.map((item, idx) => {
          const ChooseIcon = item.icon;

          return (
            <div
              key={idx}
              className="group bg-dark-300 hover:bg-dark-500 p-4 rounded-xl transition duration-150 hover:-translate-y-5"
            >
              <ChooseIcon
                className={`w-14 h-14 mx-auto p-4 mb-4 rounded-xl transition duration-150 bg-${item.coloring}-200 text-${item.coloring}-400`}
              />
              <h4>{item.heading}</h4>

              <p className="text-sm text-gray-500 my-6">{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
