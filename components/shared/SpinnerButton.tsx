import { Button } from "@base-ui/react";
import { Spinner } from "@/components/ui/spinner";

const SpinnerButton = () => {
  return (
    <Button disabled className="flex items-center gap-2">
      <Spinner data-icon="inline-start" />
      Loading...
    </Button>
  );
};

export default SpinnerButton;
