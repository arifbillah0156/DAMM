import Link from "next/link";
import React from "react";

const NavLinksDesktop = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="linkDropdownMainText">{text}</span>
    </Link>
  );
};

export default NavLinksDesktop;
