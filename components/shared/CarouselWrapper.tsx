"use client";

// React Hooks:
import React from "react";

// Next Intl:
import { useLocale } from "next-intl";

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
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel
      className={`mt-6 w-full ${className}`}
      opts={{ direction, ...opts }}
    >
      <CarouselContent>
        {React.Children.map(children, (child) => (
          <CarouselItem className={itemClassName}>{child}</CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex items-center justify-end gap-1.5">
        <CarouselPrevious className="-left-8 rtl:left-auto rtl:-right-8 rtl:rotate-180 max-md:static max-md:translate-y-0" />
        <CarouselNext className="-right-8 rtl:right-auto rtl:-left-8 rtl:rotate-180 max-md:static max-md:translate-y-0" />
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;
