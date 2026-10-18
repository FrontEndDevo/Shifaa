// Shadcn UI:
import { Spinner } from "@/components/ui/spinner";

export default function SuccessLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner className="size-10" />
    </div>
  );
}
