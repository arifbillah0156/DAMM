import Link from "next/link";

const NavLinksMobile = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 underline underline-offset-4 py-2 text-sm linkDropdownText">{text}</span>
    </Link>
  );
};

export default NavLinksMobile;
