import { Badge } from "@/components/ui/badge";

type HeadingProps = { category: string; title: string; description: string };

const Heading = ({ category, title, description }: HeadingProps) => {
  return (
    <div>
      <Badge className="mb-6 rounded-full bg-line px-6 py-4 text-lg font-semibold shadow-none hover:bg-faint">
        {category}
      </Badge>

      <h1 className="text-balance text-3xl font-semibold tracking-tight rtl:tracking-normal sm:text-5xl lg:text-6xl rtl:leading-snug">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-soft sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
};

export default Heading;
