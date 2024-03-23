"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

type NavbarProps = {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
};

function Navbar({ setIsSidebarOpen, isSidebarOpen }: NavbarProps) {
  return (
    <nav
      className={`z-10 fixed md:static max-w-[300px] md:max-w-full md:flex-1 ml-auto md:ml-0 left-0 right-0 top-0 flex flex-col md:justify-between md:items-center p-2 h-full md:h-auto bg-gray-100 md:bg-white transition-transform md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <Button
        className="flex ml-auto md:hidden"
        size="icon"
        variant="icon"
        onClick={() => setIsSidebarOpen(false)}>
        <IoClose className="size-6" />
      </Button>

      <ul className="mt-4 md:mt-0 flex flex-col md:flex-row gap-y-5 gap-x-3">
        {NAV_LINKS.map((navLink) => (
          <li key={navLink.id}>
            <Link
              className="whitespace-nowrap px-2 py-2 text-base md:text-sm 2xl:text-base font-medium hover:text-green-100 text-gray-400 transition-colors "
              href={navLink.url}>
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
