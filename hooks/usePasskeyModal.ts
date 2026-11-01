// Next Hooks:
import { useEffect, useState } from "react";

// Customised Next Components:
import { useRouter } from "@/i18n/navigation";

// Authorization:
import {
  checkAdminSession,
  verifyAndSetPasskey,
} from "@/validation/auth.actions";

// Next Intl:
import { useTranslations } from "next-intl";

const usePasskeyModal = () => {
  const t = useTranslations("Login.passkey");

  const router = useRouter();

  const [passkey, setPasskey] = useState("");
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const adminHandler = async () => {
      const isAdminAuthorized = await checkAdminSession();
      if (isAdminAuthorized) {
        router.replace("/admin");
      } else {
        setOpen(true);
      }
    };

    adminHandler();
  }, [router]);

  const closeModalHandler = () => {
    setOpen(false);
    router.replace("/auth/login");
  };

  const validatePasskeyHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const verifyAndSetAdminPasskey = await verifyAndSetPasskey(passkey);

    if (verifyAndSetAdminPasskey.success) {
      router.replace("/admin");
    } else {
      setHasError(true);
    }
  };

  return {
    passkey,
    setPasskey,
    error: hasError ? t("invalid") : "",
    open,
    setOpen,
    closeModalHandler,
    validatePasskeyHandler,
  };
};

export default usePasskeyModal;
