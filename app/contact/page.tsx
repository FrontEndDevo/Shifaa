"use client";

// Next Components:
import Image from "next/image";
import Link from "next/link";

// Components:
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

// Constants:
import { CONTACT_DATA } from "@/constants/ContactUs";

// Lucide Icons:
import { HeartPlus } from "lucide-react";

// Shadcn UI:
import { Button } from "@/components/ui/button";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

const ContactPage = () => {
  const { title, description, benefits, contact, contactForm } = CONTACT_DATA;

  const { data } = useGetPatient();

  const isAuthenticated = !!data;

  const submitContactFormHandler = (e) => {
    e.preventDefault();
    console.log("Sending message...");
  };

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div>
            <div className="flex items-center flex-col lg:flex-row gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-sm md:text-base lg:text-lg font-medium text-primary-foreground">
                  {description}
                </p>
              </div>
              <Image
                src="/assets/images/contact/contact.jpg"
                alt="contact shifaa"
                className="size-full max-h-96 rounded-2xl"
                width={1000}
                height={1000}
              />
            </div>

            <div className="grid gap-4 grid-cols-2 my-10">
              <div>
                <div className="flex gap-2">
                  <HeartPlus height="44" width="44" className="text-red-700" />
                  <div className="text-start">
                    <h4 className="font-bold text-xl">Shifaa</h4>
                    <p className="font-light text-gray-300">
                      Healthcare management system
                    </p>
                  </div>
                </div>
                <p className="text-sm my-2 text-gray-500">{description}</p>
                <div className="flex gap-4 flex-wrap items-center my-4">
                  {benefits.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-2 bg-dark-400 rounded-md py-2 px-4"
                    >
                      <item.badge
                        height="18"
                        width="18"
                        className={item.className}
                      />
                      <h6 className="text-xs font-semibold">{item.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <form
                onSubmit={submitContactFormHandler}
                className="border-2 border-blue-600 p-2 rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <contact.badge
                      height="44"
                      width="44"
                      className="text-blue-700"
                    />
                    <h4 className="font-bold text-xl">{contact.title}</h4>
                  </div>
                  <p className="text-sm my-2 text-gray-500">
                    {contact.description}
                  </p>
                </div>
                <div>
                  <textarea
                    rows={5}
                    disabled={!isAuthenticated}
                    placeholder="Type your message here."
                    className="w-full rounded-xl border border-slate-700 p-4 text-slate-100 placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {!isAuthenticated ? (
                    <div className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 text-sm text-amber-400">
                      <span>Please Login first, so you can contact us.</span>
                      <Button
                        size="sm"
                        className="bg-blue-500 text-lg py-1 px-4 hover:bg-blue-400 rounded text-slate-950 font-semibold"
                      >
                        <Link href="/login">Login</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <button className="w-full bg-blue-500 my-2 hover:bg-blue-400 text-slate-950 font-bold">
                        {contactForm.title}
                      </button>
                      <p className="text-xs text-start text-green-400">
                        {contactForm.topAlert}
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
