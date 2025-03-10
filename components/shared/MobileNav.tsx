import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignIn, UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignIn>
          <UserButton showName />
        </SignIn>
      </nav>
    </header>
  );
};

export default MobileNav;
