import Link from "next/link";

const NavDropdownDesktop2 = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 linkDropdownText hover:bg-lc hover:text-white underline underline-offset-4">{text}</span>
    </Link>
  );
};

export default NavDropdownDesktop2;
