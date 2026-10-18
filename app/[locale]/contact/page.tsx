"use client";

// Next Components:
import Image from "next/image";

// Customised Next Components:
import { Link } from "@/i18n/navigation";

// Components:
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

// Constants:
import { CONTACT_BENEFITS } from "@/constants/ContactUs";

// Lucide Icons:
import { ContactIcon, HeartPlus } from "lucide-react";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

// Next Intl:
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("Contact");

  const { data } = useGetPatient();

  const isAuthenticated = data?.status === "IS_PATIENT";

  const submitContactFormHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending message...");
  };

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-bold">{t("title")}</h3>
                <p className="text-sm font-medium text-soft md:text-base lg:text-lg">
                  {t("description")}
                </p>
              </div>
              <Image
                src="/assets/images/contact/contact.jpg"
                alt={t("imageAlt")}
                className="size-full max-h-96 rounded-2xl"
                width={1000}
                height={1000}
              />
            </div>

            <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <div className="flex gap-2">
                  <HeartPlus height="44" width="44" className="text-red-700" />
                  <div className="text-start">
                    <h4 className="text-xl font-bold">{t("brand")}</h4>
                    <p className="font-light text-soft">{t("tagline")}</p>
                  </div>
                </div>
                <p className="my-2 text-sm text-faint">{t("description")}</p>
                <div className="my-4 flex flex-wrap items-center gap-4">
                  {CONTACT_BENEFITS.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-2 rounded-md border border-line bg-card px-4 py-2"
                    >
                      <item.badge
                        height="18"
                        width="18"
                        className={item.className}
                      />
                      <h6 className="text-xs font-semibold">
                        {t(`benefits.${item.id}`)}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={submitContactFormHandler}
                className="rounded-lg border-2 border-blue-600 p-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <ContactIcon
                      height="44"
                      width="44"
                      className="text-blue-700"
                    />
                    <h4 className="text-xl font-bold">{t("form.title")}</h4>
                  </div>
                  <p className="my-2 text-sm text-faint">
                    {t("form.description")}
                  </p>
                </div>
                <div>
                  <textarea
                    rows={5}
                    disabled={!isAuthenticated}
                    placeholder={t("form.placeholder")}
                    className="w-full rounded-xl border border-line bg-card p-4 text-main placeholder:text-faint focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {!isAuthenticated ? (
                    <div className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 text-sm text-amber-600 dark:text-amber-400">
                      <span>{t("form.loginRequired")}</span>
                      <Button
                        type="button"
                        size="sm"
                        className="rounded bg-blue-500 px-4 py-1 text-lg font-semibold text-slate-950 hover:bg-blue-400"
                      >
                        <Link href="/auth/login">{t("form.login")}</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <button className="my-2 w-full bg-blue-500 font-bold text-slate-950 hover:bg-blue-400">
                        {t("form.send")}
                      </button>
                      <p className="text-start text-xs text-green-500">
                        {t("form.privacy")}
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
