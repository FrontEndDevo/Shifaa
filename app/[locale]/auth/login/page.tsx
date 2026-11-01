// Next Components:
import Image from "next/image";

// Next Intl:
import { getTranslations } from "next-intl/server";

// Shifaa Layout:
import Shifaa from "@/components/layout/Shifaa";

// Types:
import { SearchParamProps } from "@/types";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import PatientLoginForm from "@/components/forms/PatientLoginForm/PatientLoginForm";
import SpinnerButton from "@/components/shared/SpinnerButton";
import PasskeyModal from "@/components/modals/PasskeyModal";
import AdminAccessBtn from "@/components/admin/AdminAccessBtn";
import Footer from "@/components/layout/footer/Footer";

const Login = async ({ searchParams }: SearchParamProps) => {
  const { admin } = await searchParams;
  const t = await getTranslations("Login");

  const tFooter = await getTranslations("Footer");

  return (
    <>
      <Navbar />

      <section className="flex max-h-screen md:h-screen">
        {admin && <PasskeyModal />}

        <section className="container remove-scrollbar my-auto">
          <div className="sub-container max-w-[496px]">
            <Shifaa />
            <PatientLoginForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="text-faint xl:text-start">{tFooter("copyright")}</p>
              {!admin ? <AdminAccessBtn /> : <SpinnerButton />}
            </div>
          </div>
        </section>
        <Image
          src="/assets/images/onboarding-img.jpg"
          alt={t("imageAlt")}
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
