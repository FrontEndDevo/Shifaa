// Modal Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FAQs from "@/components/feedback/FAQs";
import Footer from "@/components/layout/footer/Footer";

// Constants:
import { SHIFAA_DATA } from "@/constants/HeroHome";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero {...SHIFAA_DATA} />
      <FAQs />

      <Footer />
    </>
  );
}
