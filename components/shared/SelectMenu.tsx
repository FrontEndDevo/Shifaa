// React Hooks:
import { useState } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Constants:
import { primaryFilters, statusValues } from "@/constants/Admin";

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

// Types:
import type { SelectMenuProps } from "@/types/admin.types";

type PrimaryFilter = (typeof primaryFilters)[number];

const SelectMenu = ({ getAdminFilters }: SelectMenuProps) => {
  const t = useTranslations("Admin.filters");
  const tStatus = useTranslations("AppointmentStatus");
  const doctors = useLocalizedDoctors();

  const [adminFilter, setAdminFilter] = useState<PrimaryFilter>("status");
  const [selected, setSelected] = useState<string | null>(null);

  const primaryItems = primaryFilters.map((filter) => ({
    value: filter,
    label: t(`primary.${filter}`),
  }));

  const secondaryItems =
    adminFilter === "status"
      ? statusValues.map((status) => ({
          value: status,
          label: tStatus(status),
        }))
      : doctors.map((doctor) => ({
          value: doctor.doctorId,
          label: doctor.name,
        }));

  const changePrimaryFilter = (value: string | null) => {
    if (!value) return;
    setAdminFilter(value as PrimaryFilter);
    setSelected(null);
  };

  const selectAdminFilter = (filter: string | null) => {
    if (!filter) return;
    setSelected(filter);
    getAdminFilters({ adminFilter, filter });
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="grow">
        <Label className="mb-2 block">{t("filterBy")}</Label>
        <Select
          value={adminFilter}
          items={primaryItems}
          onValueChange={changePrimaryFilter}
        >
          <SelectTrigger className="w-full" aria-label={t("filterBy")}>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {primaryItems.map((item) => (
                <SelectItem
                  key={item.value}
                  className="bg-deep py-1"
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grow">
        <Label className="mb-2 block">{t(`primary.${adminFilter}`)}</Label>
        <Select
          value={selected}
          items={secondaryItems}
          onValueChange={selectAdminFilter}
        >
          <SelectTrigger
            className="w-full"
            aria-label={t(`primary.${adminFilter}`)}
          >
            <SelectValue placeholder={t(`select.${adminFilter}`)} />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {secondaryItems.map((item) => (
                <SelectItem
                  key={item.value}
                  className="bg-deep py-1"
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectMenu;
