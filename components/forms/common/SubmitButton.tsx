"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ children, className, isLoading }: IButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn"}
    >
      {isLoading ? (
        <div className="flex justify-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
