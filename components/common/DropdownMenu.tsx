// Next Components:
import Link from "next/link";

// Lucide Icons:
import { LucideIcon } from "lucide-react";

export type DropdownMenuProps = {
  data: {
    title: string;
    description?: string;
    icon?: LucideIcon;
    url: string;
  }[];
};

export default function DropdownMenu({ data }: DropdownMenuProps) {
  return (
    <div className="invisible absolute right-0 top-full bg-dark-300 z-40 w-fit lg:w-80 pr-10 translate-y-2 rounded-lg border bg-popover p-2 text-popover-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {data.map((item, i) => {
        const Icon = item?.icon;

        return (
          <Link
            key={i}
            href={item.url}
            className="flex gap-3 static left-0 top-full z-30 rounded-md p-3 transition-colors hover:bg-muted"
          >
            {Icon && <Icon className="mt-0.5 size-5 shrink-0 text-primary" />}

            <div>
              <div className="text-sm font-semibold capitalize">
                {item.title}
              </div>

              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
