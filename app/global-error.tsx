"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const router = useRouter();
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="w-screen h-screen flex-col bg-black text-white flex items-center justify-center">
          <Image
            src="/assets/gifs/error.gif"
            alt="not found"
            width={500}
            height={500}
            // className="w-[600px] h-[450px]"
          />
          <h2 className="text-2xl font-bold my-6">Something went wrong!</h2>
          <button
            className="text-blue-500 hover:text-blue-400 text-xl font-semibold"
            onClick={
              // Attempt to recover by re-fetching and re-rendering the segment
              () => retry()
            }
          >
            Click here to try again.
          </button>
          <button
            className="text-amber-500 hover:text-amber-400 text-xl font-semibold mt-6 underline"
            onClick={
              // Attempt to recover by re-fetching and re-rendering the segment
              () => router.push("/")
            }
          >
            or go home.
          </button>
        </div>
      </body>
    </html>
  );
}
