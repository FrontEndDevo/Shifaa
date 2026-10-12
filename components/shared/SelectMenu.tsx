// React Hooks:
import { useState } from "react";

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
import { DOCTORS } from "@/constants/Doctor";
import { primaryFilters, statusValues } from "@/constants/Admin";

// Types:
import { SelectMenuProps } from "@/types/admin.types";

const SelectMenu = ({ getAdminFilters }: SelectMenuProps) => {
  const [adminFilter, setAdminFilter] = useState("Status");

  const filters =
    adminFilter === "Status"
      ? statusValues
      : adminFilter === "Doctors"
        ? DOCTORS.map((doc) => doc.name)
        : [];

  const selectAdminFilter = (filter: string | null) => {
    if (filter) getAdminFilters({ adminFilter, filter });
  };

  return (
    <div className="grid gap-3 grid-cols-2">
      <div className="grow">
        <Label className="mb-2 block">Status (Default)</Label>
        <Select
          defaultValue="Select a filter"
          onValueChange={(value) => {
            if (value) setAdminFilter(value);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a filter" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {primaryFilters.map((filter) => (
                <SelectItem
                  key={filter}
                  className="bg-dark-200 py-1"
                  value={filter}
                >
                  {filter}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grow">
        <Label className="mb-2 block">{adminFilter}</Label>
        <Select
          defaultValue={`Select a ${adminFilter}`}
          onValueChange={selectAdminFilter}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select a ${adminFilter}`} />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {filters.map((filter) => (
                <SelectItem
                  key={filter}
                  className="bg-dark-200 py-1"
                  value={filter}
                >
                  {filter}
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
