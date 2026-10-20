// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import Testimonials from "@/components/testimonials/Testimonials";
import MeetOurTeam from "@/components/feedback/MeetOurTeam";
import Integrations from "@/components/integrations/Integrations";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <MeetOurTeam />
      <Integrations />
      <Footer />
    </>
  );
}
