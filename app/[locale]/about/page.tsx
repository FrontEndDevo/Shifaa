// Next Components:
import Image from "next/image";

// Constants:
import { ABOUT_SECTIONS } from "@/constants/AboutUs";

// Components:
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

// Next Intl:
import { useTranslations } from "next-intl";

const MAX_COLUMNS = 3;
const COLUMN_CHARS = 160;

const truncate = (content: string) => {
  if (content.length <= COLUMN_CHARS) {
    return content;
  }
  return `${content.slice(0, COLUMN_CHARS).trimEnd()}…`;
};

const AboutPage = () => {
  const t = useTranslations("About");

  const columns = ABOUT_SECTIONS.slice(0, MAX_COLUMNS);

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-16 lg:gap-28">
            <div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <h2 className="text-4xl font-semibold tracking-tighter rtl:tracking-normal lg:text-6xl">
                  {t("heading")}
                </h2>
                <p className="text-sm leading-relaxed text-soft md:text-base lg:text-lg">
                  {t("description")}
                </p>
              </div>
              <Image
                src="/assets/images/about/about_2.jpg"
                alt={t("images.hero")}
                className="mt-6 size-full max-h-96 rounded-2xl"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">
                  {t("sections.story.title")}
                </h3>
                <p className="text-sm font-medium text-soft md:text-base lg:text-lg">
                  {t("sections.story.content")}
                </p>
              </div>

              <Image
                src="/assets/images/about/about_1.jpg"
                alt={t("images.story")}
                className="size-full max-h-96 rounded-2xl object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row-reverse">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">
                  {t("sections.drives.title")}
                </h3>
                <p className="text-sm font-medium text-soft md:text-base lg:text-lg">
                  {t("sections.drives.content")}
                </p>
              </div>
              <Image
                src="/assets/images/about/about_3.jpg"
                alt={t("images.drives")}
                className="size-full max-h-96 rounded-2xl object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-3xl font-semibold tracking-tight rtl:tracking-normal md:text-5xl">
                  {t("whoWeAre.title")}
                </h3>

                <p className="text-sm text-soft md:text-base lg:text-lg">
                  {t("whoWeAre.description")}
                </p>
              </div>

              <div className="grid gap-10 text-center md:grid-cols-3 md:gap-12">
                {columns.map((section) => (
                  <div
                    key={section.id}
                    className="flex flex-col gap-3 border-t border-line pt-6"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <section.icon className="h-6 w-6 text-green-500" />
                      <h4 className="text-lg font-semibold">
                        {t(`sections.${section.id}.title`)}
                      </h4>
                    </div>
                    <p className="text-sm text-soft md:text-base lg:text-lg">
                      {truncate(t(`sections.${section.id}.content`))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
