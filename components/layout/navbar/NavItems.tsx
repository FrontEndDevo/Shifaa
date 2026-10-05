// Next Components:
import Link from "next/link";

// Lucide React:
import { ChevronDown } from "lucide-react";

// Types:
import { NavItem } from "@/types/navbar.types";

// Components:
import DropdownMenu from "@/components/common/DropdownMenu";

const NavItems = ({ item }: { item: NavItem }) => {
  const Icon = item.icon;

  return (
    <div key={item.title} className="relative">
      {item.items?.length ? (
        <div className="group">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
          >
            {Icon && <Icon className="size-4 shrink-0" />}

            {item.title}

            <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
          </button>

          {/* Dropdown */}
          <DropdownMenu data={item.items} />
        </div>
      ) : (
        <Link
          href={item.url}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
        >
          {Icon && <Icon className="size-4 shrink-0" />}

          {item.title}
        </Link>
      )}
    </div>
  );
};

export default NavItems;
