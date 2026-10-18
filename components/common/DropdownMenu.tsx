// customised Next Components:
import { Link, useRouter } from "@/i18n/navigation";

// React Query:
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Lucide Icons:
import { LogOut } from "lucide-react";

// Shadcn UI:
import { Button } from "@base-ui/react";

// API Actions Hooks:
import { logoutUser } from "@/lib/actions/patient.actions";
import { toast } from "../ui/toast";

// Types:
import { DropdownMenuProps } from "@/types/navbar.types";

// Next Intl:
import { useTranslations } from "next-intl";

const DropdownMenu = ({ data, showLogout = false }: DropdownMenuProps) => {
  const t = useTranslations("Nav");

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
        title: t("navToaster.logoutSuccess"),
      });

      router.refresh();
      router.replace("/auth/login");
    },
    onError: () => {
      toast.add({
        type: "error",
        title: t("navToaster.logoutError"),
      });
    },
  });

  const logOutHandler = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="invisible absolute end-0 top-full bg-page z-40 w-fit lg:w-80 pe-10 translate-y-2 rounded-lg border border-line p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {data.map((item, i) => {
        const Icon = item?.icon;

        return (
          <Link
            key={i}
            href={item.url}
            className="flex gap-3 rounded-md p-3 transition-colors hover:bg-line"
          >
            {Icon && <Icon className="mt-0.5 size-5 shrink-0 text-main" />}

            <div>
              <div className="text-sm font-semibold capitalize">
                {item.title}
              </div>

              {item.description && (
                <p className="mt-1 text-sm text-faint">{item.description}</p>
              )}
            </div>
          </Link>
        );
      })}

      {showLogout && (
        <Button
          onClick={logOutHandler}
          className="border-t border-line w-full flex gap-3 p-3 transition-colors hover:bg-line"
        >
          <LogOut className="mt-0.5 size-5 shrink-0 text-main" />

          <p className="text-sm font-semibold capitalize">
            {t("navToaster.logout")}
          </p>
        </Button>
      )}
    </div>
  );
};

export default DropdownMenu;
