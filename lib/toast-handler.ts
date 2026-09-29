// Shadcn UI:
import { toast } from "@/components/ui/toast";

interface IMutationToasterProps<T> {
  mutationPromise: Promise<T>;
  loadingTitle: string;
  loadingDescription?: string;
  successTitle: string;
  successDescription?: string;
  errorTitle: string;
  errorDescription?: string;
  onPromiseSuccess?: (data?: T) => void;
}

export default function MutationToaster<T>({
  mutationPromise,
  loadingTitle,
  loadingDescription,
  successTitle,
  successDescription,
  errorTitle,
  errorDescription,
  onPromiseSuccess,
}: IMutationToasterProps<T>) {
  return toast.promise(
    mutationPromise.then((data) => {
      if (onPromiseSuccess) onPromiseSuccess(data);

      return data;
    }),
    {
      loading: {
        title: loadingTitle,
        description: loadingDescription,
      },
      success: {
        title: successTitle,
        description: successDescription,
      },
      error: {
        title: errorTitle,
        description: errorDescription,
      },
    },
  );
}
