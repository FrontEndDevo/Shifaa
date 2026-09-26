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

// Authorization:
import {
  checkAdminSession,
  verifyAndSetPasskey,
} from "@/lib/actions/auth.actions";

const PasskeyModal = () => {
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
    router.replace("/");
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

  if (!open) return null;

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
