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
  errorMessage = "Something went wrong, please try again.",
  children,
}: TQueryWrapperProps<T>) {
  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner className="size-10" />
      </div>
    );

  if (isError || !data)
    <div className="flex h-screen w-screen items-center justify-center text-red-500">
      <p>{errorMessage}</p>
    </div>;

  return <>{children}</>;
}
