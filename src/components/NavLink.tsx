"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Define the props we expect (mimicking the old React Router interface)
interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string; // We map this to Next.js 'href'
  activeClassName?: string;
  pendingClassName?: string; // Kept for compatibility, though rarely used in Next.js
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    
    // Check if the current path matches the link's destination
    // You can change '===' to 'pathname.startsWith(to)' if you want partial matching
    const isActive = pathname === to;

    return (
      <Link
        href={to}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };