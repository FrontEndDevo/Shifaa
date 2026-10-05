import { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  icon: LucideIcon;
  heading: string;
  title: string;
  desctiption: string;
};

const SectionHeading = (props: SectionHeadingProps) => {
  const { icon: LucideIcon, heading, title, desctiption } = props;
  return (
    <div>
      <div className="bg-red-200 mx-auto py-1 px-4 rounded-full flex gap-1 w-fit">
        <LucideIcon className="h-5 w-5 text-red-400" />
        <p className="text-sm uppercase text-red-700 font-semibold tracking-wider">
          {heading}
        </p>
      </div>
      <h2 className="text-center font-medium text-4xl tracking-tight md:text-4xl my-6">
        {title}
      </h2>
      <p className="text-balance text-center text-lg text-muted-foreground sm:text-2xl mb-6">
        {desctiption}
      </p>
    </div>
  );
};

export default SectionHeading;
