import Link from "next/link";
import React from "react";

const NavLinksMobile = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 text-sm linkDropdownText">{text}</span>
    </Link>
  );
};

export default NavLinksMobile;
