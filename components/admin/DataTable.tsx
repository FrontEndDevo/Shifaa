"use client";

// React Hooks:
import { useState } from "react";

// Next Components:
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

// React Table
import {
  useTable,
  type ColumnDef,
  type RowData,
  type ColumnFiltersState,
} from "@tanstack/react-table";

// Shadcn UI:
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Components:
import { features, DataTableFeatures } from "./AdminFeatures";
import SelectMenu from "../shared/SelectMenu";

// Types:
import { AdminFiltersProps } from "@/types/admin.types";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[];
  data: TData[];
}

export function DataTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  const t = useTranslations("Admin.table");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useTable({
    features,
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  const getAdminFilters = ({ adminFilter, filter }: AdminFiltersProps) => {
    if (adminFilter === "status") {
      table.resetColumnFilters();
      table.getColumn("status")?.setFilterValue(filter);
    } else if (adminFilter === "doctors") {
      table.resetColumnFilters();
      table.getColumn("primaryPhysician")?.setFilterValue(filter);
    }
  };

  const filterTableByPatientNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    table.resetColumnFilters();
    table.getColumn("patient")?.setFilterValue(event.target.value);
  };

  const patientInputFilter =
    (table.getColumn("patient")?.getFilterValue() as string) ?? "";

  return (
    <>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-10 py-4 md:flex-row">
        <Input
          dir="auto"
          placeholder={t("searchPlaceholder")}
          aria-label={t("searchPlaceholder")}
          value={patientInputFilter}
          onChange={filterTableByPatientNameHandler}
          className="max-w-sm border border-green-500 focus:border-green-500"
        />
        <SelectMenu getAdminFilters={getAdminFilters} />
      </div>

      <div className="data-table">
        <Table className="shad-table text-center">
          <TableHeader className="bg-deep">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="shad-table-row-header">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="shad-table-row"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {t("empty")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Next / Previous buttons */}
        <div className="table-actions">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label={t("previous")}
            className="shad-gray-btn"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt=""
              className="rtl:rotate-180"
            />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label={t("next")}
            className="shad-gray-btn"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt=""
              className="rotate-180 rtl:rotate-0"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
