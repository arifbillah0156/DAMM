import Link from "next/link";

const NavDropdownDesktop3 = ({ href, text }) => {
    return (
        <div className="w-full linkDropdownText hover:bg-lc hover:text-white">
            <Link href={href}>
                <span className="block px-4 py-2  underline underline-offset-4 w-max">{text}</span>
            </Link>
        </div>
    );
};

export default NavDropdownDesktop3;
