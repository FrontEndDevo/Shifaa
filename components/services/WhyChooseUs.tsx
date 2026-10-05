// Lucide Icons:
import { Star } from "lucide-react";

// Types:
import { WHY_CHOOSE_US_DATA } from "@/constants/WhyChooseUsSection";

// Components:
import SectionHeading from "../common/SectionHeading";

const WhyChooseUs = () => {
  return (
    <section className="text-center py-20 bg-dark-400">
      <SectionHeading
        icon={Star}
        heading="Why Choose Us"
        title="The Shifaa healthcare Difference"
        desctiption="Excellence in cardiac care with a patient-first approach backed by
            cutting-edge technology."
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
