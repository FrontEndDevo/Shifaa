// Next Components:
import Image from "next/image";

// Constants:
import { ABOUT_CONTENT } from "@/constants/AboutUs";

// Components:
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

const MAX_COLUMNS = 3;
const COLUMN_CHARS = 160;

const truncate = (content: string) => {
  if (content.length <= COLUMN_CHARS) {
    return content;
  }
  return `${content.slice(0, COLUMN_CHARS).trimEnd()}…`;
};

const AboutPage = () => {
  const { heading, description, sections, whoWeAre } = ABOUT_CONTENT;

  const columns = (sections ?? []).slice(0, MAX_COLUMNS);

  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-16 lg:gap-28">
            <div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <h2 className="text-4xl font-semibold tracking-tighter lg:text-6xl">
                  {heading}
                </h2>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <Image
                src="/assets/images/about/about_2.jpg"
                alt="about us"
                className="size-full max-h-96 rounded-2xl mt-6"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">{sections?.[1]?.title}</h3>
                <p className="text-sm md:text-base lg:text-lg font-medium text-primary-foreground">
                  {sections?.[1]?.content}
                </p>
              </div>

              <Image
                src="/assets/images/about/about_1.jpg"
                alt="about 1"
                className="size-full max-h-96 rounded-2xl object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">{sections?.[2]?.title}</h3>
                <p className="text-sm md:text-base lg:text-lg font-medium text-primary-foreground">
                  {sections?.[2]?.content}
                </p>
              </div>
              <Image
                src="/assets/images/about/about_3.jpg"
                alt="about 1"
                className="size-full max-h-96 rounded-2xl object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex text-center flex-col gap-4">
                <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {whoWeAre.title}
                </h3>

                <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                  {whoWeAre.description}
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-3 md:gap-12 text-center">
                {columns.map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col gap-3 border-t border-border pt-6"
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <section.icon className="h-6 w-6 text-primary" />
                      <h4 className="text-lg font-semibold">{section.title}</h4>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      {truncate(section.content)}
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
