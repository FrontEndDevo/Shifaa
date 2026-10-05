import React from "react";

// Shadcn UI:
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type CarouselWrapperProps = {
  children: React.ReactNode;
  opts?: Parameters<typeof Carousel>[0]["opts"];
  itemClassName?: string;
  className?: string;
};

const CarouselWrapper = ({
  children,
  opts,
  itemClassName = "basis-1/2 md:basis-1/3 lg:basis-1/4",
  className = "",
}: CarouselWrapperProps) => {
  return (
    <Carousel className={`mt-6 w-full ${className}`} opts={opts}>
      <CarouselContent>
        {React.Children.map(children, (child) => (
          <CarouselItem className={itemClassName}>{child}</CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex items-center justify-end gap-1.5">
        <CarouselPrevious className="-left-8 max-md:static max-md:translate-y-0" />
        <CarouselNext className="-right-8 max-md:static max-md:translate-y-0" />
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;
