"use client";

// React Hooks:
import { useState } from "react";

// Lucide React:
import { Menu, X } from "lucide-react";

// Constants:
import { NAV_MENU } from "@/constants/Nav";

// Shifaa:
import Shifaa from "../Shifaa";

// Components:
import NavItems from "./NavItems";
import NavActionButton from "./NavActionButton";

// API Actions Hooks:
import { useGetPatient } from "@/hooks/usePatient";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetPatient();

  return (
    <header className="sticky top-0 right-0 z-50 border-b bg-dark-300">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Shifaa class="w-8 h-8" text="text-xl" />

        {/* DESKTOP */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItems key={item.title} item={item} />
          ))}
        </div>

        <div className="hidden lg:block">
          <NavActionButton userId={data?.userId} />
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 transition-colors hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 border-t bg-dark-300 shadow-xl lg:hidden">
          <div className="gap-4 max-w-7xl bg-dark-300 py-4">
            {NAV_MENU.map((item) => (
              <NavItems key={item.title} item={item} />
            ))}
            <div className="flex justify-center col-span-2">
              <NavActionButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
