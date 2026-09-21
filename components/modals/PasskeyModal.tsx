"use client";

// Next Hooks:
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Next Components:
import Image from "next/image";

// Shadcn UI:
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Utilities:
import { decryptKey, encryptKey } from "@/lib/encryption";

const PasskeyModal = () => {
  const router = useRouter();

  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  // Initialize states lazily so we know what to render immediately on first paint
  const [isChecking, setIsChecking] = useState(() => {
    const getEncryptedKey =
      typeof window !== "undefined" ? localStorage.getItem("accessKey") : null;
    const passkey = getEncryptedKey ? decryptKey(getEncryptedKey) : null;
    // If valid, keep isChecking true so it returns null and doesn't flash the modal
    return passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString();
  });

  const [open, setOpen] = useState(() => {
    const getEncryptedKey =
      typeof window !== "undefined" ? localStorage.getItem("accessKey") : null;
    const passkey = getEncryptedKey ? decryptKey(getEncryptedKey) : null;

    // If invalid, open the modal immediately
    return passkey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString();
  });

  useEffect(() => {
    const getEncryptedKey = localStorage.getItem("accessKey");
    const decryptedPasskey = getEncryptedKey
      ? decryptKey(getEncryptedKey)
      : null;

    if (
      decryptedPasskey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString()
    ) {
      router.replace("/admin");
    }
  }, [router]);

  const closeModalHandler = () => {
    setIsChecking(false);
    setOpen(false);
  };

  const validatePasskeyHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      localStorage.setItem("accessKey", encryptedKey);
      router.replace("/admin");
    } else {
      setError("Invalid passkey. Please try again.");
    }
  };

  if (isChecking) return null;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full flex items-start justify-between">
            Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={20}
              height={20}
              onClick={closeModalHandler}
              className="cursor-pointer"
            />
          </AlertDialogTitle>

          <AlertDialogDescription>
            To access the admin page, please enter the passkey.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskeyHandler(e)}
            className="shad-primary-btn w-full"
          >
            Enter Admin Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasskeyModal;
