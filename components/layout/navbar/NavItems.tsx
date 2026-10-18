// customised Next Components:
import { Link } from "@/i18n/navigation";

// Lucide React:
import { ChevronDown } from "lucide-react";

// Types:
import { NavItem } from "@/types/navbar.types";

// Components:
import DropdownMenu from "@/components/common/DropdownMenu";

// Next Intl:
import { useTranslations } from "next-intl";

const NavItems = ({ item }: { item: NavItem }) => {
  const t = useTranslations("Nav");

  const Icon = item.icon;

  const subItems = (item.items ?? []).map((sub) => ({
    title: t(`items.${sub.id}.title`),
    description: t(`items.${sub.id}.description`),
    icon: sub.icon,
    url: sub.url,
  }));

  return (
    <div className="relative">
      {subItems.length ? (
        <div className="group">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-card hover:text-primary"
          >
            {Icon && <Icon className="size-4 shrink-0" />}

            {t(`menu.${item.id}`)}

            <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
          </button>

          {/* Dropdown */}
          <DropdownMenu data={subItems} />
        </div>
      ) : (
        <Link
          href={item.url}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-card hover:text-primary"
        >
          {Icon && <Icon className="size-4 shrink-0" />}

          {t(`menu.${item.id}`)}
        </Link>
      )}
    </div>
  );
};

export default NavItems;
