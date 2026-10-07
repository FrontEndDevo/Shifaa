// Next Hooks:
import { useRouter } from "next/navigation";

// React Query:
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Next Components:
import Link from "next/link";

// Lucide Icons:
import { LogOut, LucideIcon } from "lucide-react";

// Shadcn UI:
import { Button } from "@base-ui/react";

// API Actions Hooks:
import { logoutUser } from "@/lib/actions/patient.actions";
import { toast } from "../ui/toast";

export type DropdownMenuProps = {
  data: {
    title: string;
    description?: string;
    icon?: LucideIcon;
    url: string;
  }[];
};

const DropdownMenu = ({ data }: DropdownMenuProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      queryClient.removeQueries({
        queryKey: ["patient", "me"],
      });

      toast.add({
        type: "success",
        title: "Logout Successfully",
      });

      router.refresh();
      router.replace("/auth/login");
    },
    onError: () => {
      toast.add({
        type: "error",
        title: "Failed to Logout, please try again.",
      });
    },
  });

  const logOutHandler = () => {
    logoutMutation.mutate();
  };

  const isLoggedOut =
    data.filter((item) => item.title === "profile").length > 0 ? true : false;

  return (
    <div className="invisible absolute right-0 top-full bg-dark-300 z-40 w-fit lg:w-80 pr-10 translate-y-2 rounded-lg border bg-popover p-2 text-popover-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {data.map((item, i) => {
        const Icon = item?.icon;

        return (
          <Link
            key={i}
            href={item.url}
            className="flex gap-3 static left-0 top-full z-30 rounded-md p-3 transition-colors hover:bg-muted hover:bg-dark-500"
          >
            {Icon && <Icon className="mt-0.5 size-5 shrink-0 text-primary" />}

            <div>
              <div className="text-sm font-semibold capitalize">
                {item.title}
              </div>

              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        );
      })}

      {isLoggedOut && (
        <Button
          onClick={logOutHandler}
          className="border-t w-full flex gap-3 static left-0 top-full z-30 p-3 transition-colors hover:bg-dark-500"
        >
          <LogOut className="mt-0.5 size-5 shrink-0 text-primary" />

          <p className="text-sm font-semibold capitalize">Log Out</p>
        </Button>
      )}
    </div>
  );
};

export default DropdownMenu;
