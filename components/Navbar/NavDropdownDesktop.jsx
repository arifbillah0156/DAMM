import Link from "next/link";

const NavDropdownDesktop = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 linkDropdownText">{text}</span>
    </Link>
  );
};

export default NavDropdownDesktop;
