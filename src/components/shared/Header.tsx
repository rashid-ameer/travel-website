"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
import { IoPersonSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="container flex items-center justify-between py-4">
      {/* header left side */}
      <a href="/">
        <Image
          src="images/hilink-logo.svg"
          alt="HiLink."
          width={72}
          height={20}
          priority={true}
        />
      </a>
      {/* navbar */}
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      {/* header right side */}
      <div className="flex gap-x-4">
        <Button variant="secondary">
          <IoPersonSharp />
          Login
        </Button>

        <Button
          onClick={() => setIsSidebarOpen(true)}
          size="icon"
          className="md:hidden">
          <IoMenu className="size-6" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
