// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { Button } from "../ui/button";

// Components:
import { Spinner } from "@/components/ui/spinner";

const SpinnerButton = () => {
  const t = useTranslations("Common");

  return (
    <Button disabled className="flex items-center gap-2">
      <Spinner data-icon="inline-start" />
      {t("loading")}
    </Button>
  );
};

export default SpinnerButton;
