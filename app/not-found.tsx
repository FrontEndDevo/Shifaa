// Next Components:
import Image from "next/image";
import Link from "next/link";

// Shadcn UI:
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <Empty className="w-screen h-screen bg-[#152644] flex items-center justify-center">
      <EmptyHeader>
        <EmptyTitle>
          <Image
            src="/assets/gifs/not-found.gif"
            alt="not found"
            width={1000}
            height={1000}
            className="w-[600px] h-[450px]"
          />
        </EmptyTitle>
        <EmptyDescription className="text-xl">
          The page you are trying to access does not exist, or an error has
          occurred.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <EmptyDescription>
          <Link href="/">Go Home</Link>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
