import Link from "next/link";

const NavDropdownMobile2 = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 text-sm linkDropdownText_M">{text}</span>
    </Link>
  );
};

export default NavDropdownMobile2;
