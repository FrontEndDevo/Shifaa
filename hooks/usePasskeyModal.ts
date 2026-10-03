// Next Hooks:
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Authorization:
import {
  checkAdminSession,
  verifyAndSetPasskey,
} from "@/validation/auth.actions";

const usePasskeyModal = () => {
  const router = useRouter();

  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");
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
      setError("Invalid passkey. Please try again.");
    }
  };

  return {
    passkey,
    setPasskey,
    error,
    open,
    setOpen,
    closeModalHandler,
    validatePasskeyHandler,
  };
};

export default usePasskeyModal;
