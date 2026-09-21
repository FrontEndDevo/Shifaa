type TAdminTypes = "appointments" | "pending" | "cancelled";

export type TAdminProps = {
  type: TAdminTypes;
  count: number;
  label: string;
  icon: string;
};
