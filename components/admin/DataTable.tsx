"use client";

// React Hooks:
import { useState } from "react";

// Next Components:
import Image from "next/image";

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
    if (adminFilter === "Status") {
      table.resetColumnFilters();
      table.getColumn("status")?.setFilterValue(filter);
    } else if (adminFilter === "Doctors") {
      table.resetColumnFilters();
      table.getColumn("primaryPhysician")?.setFilterValue(filter);
    } else {
    }
  };

  // Filter table by patient name using input field.
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
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-4 w-full gap-10">
        <Input
          placeholder="Filter appointments by patient name..."
          value={patientInputFilter}
          onChange={filterTableByPatientNameHandler}
          className="max-w-sm border focus:border-green-500 border-green-500"
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
                  No appointments.
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
            className="shad-gray-btn"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow"
            />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="shad-gray-btn"
          >
            <Image
              src="/assets/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow"
              className="rotate-180"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
