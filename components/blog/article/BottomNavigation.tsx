// Next Components:
import Link from "next/link";

// Lucide Icons:
import { ArrowLeft } from "lucide-react";

const BottomNavigation = () => {
  return (
    <footer className="border-t-2 md:border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center md:items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition duration-150 group-hover:-translate-x-2" />
          Explore more posts
        </Link>

        <p className="text-xs text-muted-foreground hidden md:block">
          © {new Date().getFullYear()} Shifaa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default BottomNavigation;
