// Next Components:
import Image from "next/image";

// Next Intl:
import { getTranslations } from "next-intl/server";

// Components:
import RegisterForm from "@/components/forms/RegisterForm/RegisterForm";
import Shifaa from "@/components/layout/Shifaa";

// Types:
import { SearchParamProps } from "@/types";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = await params;

  const t = await getTranslations("Auth.register");

  const tFooter = await getTranslations("Footer");

  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar my-20">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Shifaa />

          <RegisterForm userId={userId} />

          <p className="my-10 text-faint xl:text-start">
            {tFooter("copyright")}
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt={t("imageAlt")}
        width={1000}
        height={1000}
        className="side-img hidden max-w-[50%] lg:block"
      />
    </div>
  );
};

export default Register;
