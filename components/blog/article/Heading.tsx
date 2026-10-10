import { Badge } from "@/components/ui/badge";

type HeadingProps = { category: string; title: string; description: string };

const Heading = ({ category, title, description }: HeadingProps) => {
  return (
    <div>
      <Badge className="mb-6 px-6 py-4 text-lg font-semibold bg-dark-500 rounded-full shadow-none hover:bg-dark-600">
        {category}
      </Badge>

      <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
};

export default Heading;
