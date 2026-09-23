"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex-col bg-[#18B784] text-white flex items-center justify-center">
      <Image
        src="/assets/gifs/admin-error.gif"
        alt="not found"
        width={500}
        height={500}
        className="w-[600px] h-[450px]"
      />
      <h2 className="text-2xl font-bold my-6">Something went wrong!</h2>
      <button
        className="text-neutral-700 hover:text-neutral-900 text-xl font-semibold"
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => retry()
        }
      >
        Click here to try again.
      </button>
    </div>
  );
}
