"use client";

// Next Components:
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Button } from "@/components/ui/button";

interface IButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ children, className, isLoading }: IButtonProps) => {
  const t = useTranslations("Common");

  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn mt-10 w-full"}
    >
      {isLoading ? (
        <span className="flex justify-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt=""
            width={24}
            height={24}
            className="animate-spin"
          />
          <span>{t("loading")}</span>
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
