// Next Components:
import Link from "next/link";

// Lucide React:
import { ChevronDown } from "lucide-react";

// Types:
import { NavItem, NavSubItem } from "@/types/navbar.types";

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
          <div className="invisible absolute left-0 top-full bg-dark-300 z-40 w-fit pr-10 translate-y-2 rounded-lg border bg-popover p-2 text-popover-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {item.items.map((subItem: NavSubItem) => {
              const SubIcon = subItem.icon;

              return (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  className="flex gap-3 static left-0 top-full z-30 rounded-md p-3 transition-colors hover:bg-muted"
                >
                  {SubIcon && (
                    <SubIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  )}

                  <div>
                    <div className="text-sm font-semibold">{subItem.title}</div>

                    {subItem.description && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
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
