// Next Components:
import Link from "next/link";

// Lucide Icons:
import { ArrowRight, HeartCrack } from "lucide-react";

// Constants:
import { OUR_SERVICES } from "@/constants/OurServices";
import SectionHeading from "../common/SectionHeading";

const Services = () => {
  return (
    <section className="container text-center py-20">
      <SectionHeading
        icon={HeartCrack}
        heading="our services"
        title="Comprehensive Shifaa services"
        desctiption="From diagnostics to rehabilitation, we offer a full spectrum of
            cardiology services tailored to your heart health needs."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {OUR_SERVICES.map((service, idx) => {
          const ServiceIcon = service.icon;

          return (
            <div key={idx} className="group bg-white p-4 rounded-xl">
              <ServiceIcon
                className={`w-12 h-12 p-4 rounded-xl transition duration-150 bg-${service.coloring}-200 text-${service.coloring}-400 group-hover:bg-${service.coloring}-400 group-hover:text-white`}
              />

              <p className="text-sm text-gray-500 my-10">{service.content}</p>

              <Link
                href={service.link}
                className="text-red-700 font-bold w-fit flex gap-2 items-center"
              >
                {service.btn}
                <ArrowRight className="h-5 w-5 text-red-700 transition duration-150 group-hover:translate-x-2" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
