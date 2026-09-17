// Next Components:
import Link from "next/link";
import Image from "next/image";

// Forms:
import PatientForm from "@/components/forms/PatientForm/PatientForm";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

export default function Home() {
  return (
    <div className="h-screen flex max-h-screen">
      {/* Todo: OTP verification | passkey*/}

      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Shifaa />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-gray-600 xl:text-left">
              © 2026 Shifaa
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
