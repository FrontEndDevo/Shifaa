// Next Components:
import Link from "next/link";
import Image from "next/image";

// Forms:
import PatientLoginForm from "@/components/forms/PatientLoginForm/PatientLoginForm";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

// Types:
import { SearchParamProps } from "@/types";

// Components:
import SpinnerButton from "@/components/shared/SpinnerButton";
import PasskeyModal from "@/components/modals/PasskeyModal";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

const Login = async ({ searchParams }: SearchParamProps) => {
  const { admin } = await searchParams;

  return (
    <>
      <Navbar />

      <section className="h-screen flex max-h-screen">
        {admin && <PasskeyModal />}

        <section className="container remove-scrollbar my-auto">
          <div className="sub-container max-w-[496px]">
            <Shifaa />
            <PatientLoginForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-gray-600 xl:text-left mb-2">
                © 2026 Shifaa
              </p>
              {!admin ? (
                <Link href="/?admin=true" className="text-green-500">
                  Admin
                </Link>
              ) : (
                <SpinnerButton />
              )}
            </div>
          </div>
        </section>
        <Image
          src="/assets/images/onboarding-img.jpg"
          alt="patient"
          width={1000}
          height={1000}
          className="side-img max-w-[50%]"
        />
      </section>

      <Footer />
    </>
  );
};

export default Login;
