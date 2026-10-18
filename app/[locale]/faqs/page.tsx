// Shadcn UI:
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Constants:
import { FAQ_IDS } from "@/constants/FAQs";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

// Next Intl:
import { useTranslations } from "next-intl";

const FaqsPage = () => {
  const t = useTranslations("Faqs");

  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 xl:py-24">
          <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <p className="h-auto rounded-full border-2 border-line px-3 py-1 text-sm">
              {t("badge")}
            </p>
            <h2 className="max-w-lg text-center text-5xl font-medium">
              {t("heading")}
            </h2>
          </div>
          <div>
            <Accordion className="flex w-full flex-col gap-6">
              {FAQ_IDS.map((id) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="group/item flex flex-col gap-3 rounded-2xl border border-line p-6 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both data-[open]:bg-card"
                >
                  <AccordionTrigger className="cursor-pointer p-0 text-lg font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                    {t(`items.${id}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="p-0 text-base text-soft">
                    {t(`items.${id}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FaqsPage;
