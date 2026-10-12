type TAdminTypes = "appointments" | "pending" | "cancelled";

export type TAdminProps = {
  type: TAdminTypes;
  count: number;
  label: string;
  icon: string;
};

export type AdminFiltersProps = {
  adminFilter: string;
  filter: string;
};

export type SelectMenuProps = {
  getAdminFilters: ({ adminFilter, filter }: AdminFiltersProps) => void;
};
