// Next Components:
import Link from "next/link";

interface BannerProps {
  preMessage: string;
  button: string;
  link: string;
  postMessage?: string;
}

export default function Banner({
  preMessage,
  button,
  link,
  postMessage,
}: BannerProps) {
  return (
    <div className="flex min-h-10 flex-wrap items-center justify-center bg-primary px-3 py-2 text-center text-primary-foreground text-sm">
      <span>{preMessage}</span>
      <div>
        <Link
          className="mx-1 underline underline-offset-2 text-blue-500 transition duration-100 hover:text-blue-600"
          href={`/${link}`}
        >
          {" "}
          {button}{" "}
        </Link>
        <span>{postMessage}</span>
      </div>
    </div>
  );
}
