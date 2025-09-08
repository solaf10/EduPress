"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  const router = usePathname();
  const isActive = router == href;
  return (
    <Link className={isActive ? "active" : className || ""} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
