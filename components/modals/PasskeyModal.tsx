"use client";

// Next Components:
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

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

import usePasskeyModal from "@/hooks/usePasskeyModal";

const PasskeyModal = () => {
  const t = useTranslations("Login.passkey");

  const {
    passkey,
    setPasskey,
    error,
    open,
    setOpen,
    closeModalHandler,
    validatePasskeyHandler,
  } = usePasskeyModal();

  if (!open) return null;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex w-full items-start justify-between">
            {t("title")}
            <Image
              src="/assets/icons/close.svg"
              alt={t("close")}
              width={20}
              height={20}
              onClick={closeModalHandler}
              className="cursor-pointer"
            />
          </AlertDialogTitle>

          <AlertDialogDescription>{t("description")}</AlertDialogDescription>
        </AlertDialogHeader>

        <div dir="ltr">
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
            <p
              dir="auto"
              className="shad-error text-14-regular mt-4 flex justify-center"
            >
              {error}
            </p>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskeyHandler(e)}
            className="shad-primary-btn w-full"
          >
            {t("enter")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasskeyModal;
