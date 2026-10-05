// Next Components:
import Image from "next/image";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import RegisterForm from "@/components/forms/RegisterForm/RegisterForm";
import Footer from "@/components/layout/footer/Footer";

// Types:
import { SearchParamProps } from "@/types";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = await params;

  return (
    <div className="h-screen flex max-h-screen">
      <section className="container remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Shifaa />

          <RegisterForm userId={userId} />

          <p className="justify-items-end text-gray-600 xl:text-left my-10">
            © 2026 Shifaa
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;
