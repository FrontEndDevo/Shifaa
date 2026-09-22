// Next Components:
import Link from "next/link";
import Image from "next/image";

// Forms:
import PatientForm from "@/components/forms/PatientForm/PatientForm";

// Shifaa Icon:
import Shifaa from "@/components/layout/Shifaa";

// Types:
import { SearchParamProps } from "@/types";

// Modal Components:
import PasskeyModal from "@/components/modals/PasskeyModal";
import SpinnerButton from "@/components/shared/SpinnerButton";

export default async function Home({ searchParams }: SearchParamProps) {
  const { admin } = await searchParams;

  return (
    <div className="h-screen flex max-h-screen">
      {admin && <PasskeyModal />}

      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Shifaa />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-gray-600 xl:text-left">
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
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
