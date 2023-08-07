"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-around h-16 bg-black text-white">
      <h2 className="text-xl">
        <Link href={"/"}>
          <Image
            src={"/nextjs-13.svg"}
            width={120}
            height={120}
            priority
            className="invert"
            alt="logo"
          />
        </Link>
      </h2>
      <ul className="flex items-center gap-10">
        <li className="cursor-pointer">
          <Link
            href={"/dynamic"}
            className={`${
              pathname === "/dynamic" && "underline underline-offset-2"
            } `}
          >
            Dynamic
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href={"/static"}
            className={`${
              pathname === "/static" ? "underline underline-offset-2" : ""
            } `}
          >
            Static
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href={"/isr"}
            className={`${
              pathname === "/isr" ? "underline underline-offset-2" : ""
            } `}
          >
            ISR
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
