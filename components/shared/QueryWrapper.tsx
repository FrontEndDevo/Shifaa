"use client";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Spinner } from "../ui/spinner";

type TQueryWrapperProps<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined | null;
  errorMessage?: string;
  children: React.ReactNode;
};

export default function QueryWrapper<T>({
  isLoading,
  isError,
  data,
  errorMessage,
  children,
}: TQueryWrapperProps<T>) {
  const t = useTranslations("Common");

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner className="size-10" />
      </div>
    );

  if (isError || !data)
    return (
      <div className="flex h-screen w-screen items-center justify-center text-red-500">
        <p>{errorMessage ?? t("error")}</p>
      </div>
    );

  return <>{children}</>;
}
