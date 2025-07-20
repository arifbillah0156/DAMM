"use client";
import { useState } from "react";
import NavHead from "./NavHead";
import NavLogo from "./NavLogo";
import NavDropdownDesktop from "./NavDropdownDesktop";
import NavDropdownDesktop2 from "./NavDropdownDesktop2";
import NavDropdownMobile from "./NavDropdownMobile";
import NavDropdownMobile2 from "./NavDropdownMobile2";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

const NavbarWithDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  // const AcademicDropdown = [
  //   "Admission fee","Education system","Result method","Rules","Co-curriculum", "Hostel rules", "Information for parents"
  // ]

  return (
    <div className="pb-1 merriweather-regular">
      <NavHead />
      {/* Nav Links bg-[#0072BC] */}
      <nav className="text-[#0072BC] py-2">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLogo />
            {/* Desktop Menu */}
            <div className="hidden lg:flex  font-bold tracking-wider">
              <NavLinksDesktop href="/" text="Home" />
              <NavLinksDesktop href="/About/PrincipalMessage" text="About" />

              {/* Dropdown Menu */}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1" id="NavAcademic">
                  Academic <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg">
                    <NavDropdownDesktop href="/AdmissionFee" text="↪ Admission fee" />
                    <NavDropdownDesktop href="/Education-system" text="↪ Education system" />
                    <NavDropdownDesktop href="/" text="↪ Result method" />
                    <NavDropdownDesktop href="/" text="↪ Rules" />
                    <NavDropdownDesktop href="/" text="↪ Co-curriculum" />
                    <NavDropdownDesktop href="/" text="↪ Hostel rules" />
                    <NavDropdownDesktop href="/" text="↪ Information for parents" />
                  </div>
                )}
              </div>
              {/* Dropdown Menu Gallery*/}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen2(true)}
                onMouseLeave={() => setIsDropdownOpen2(false)}
                onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1" id="Gallery">
                  Gallery <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg w-max">
                    <NavDropdownDesktop2 href="/" text="↪ Photos" />
                    <NavDropdownDesktop2 href="/" text="↪ Videos" />
                  </div>
                )}
              </div>
              <NavLinksDesktop href="/Notices" text="Notices" />
              <NavLinksDesktop href="/contact" text="Contact" />
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0072BC] border p-1 mr-6 rounded-md"
              >
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 md:mt-4 font-bold tracking-wider">
            <div className="space-y-2 py-4 px-6 mobileNavMenubar">
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/" text="Home" />
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/About/PrincipalMessage" text="About" />
              </div>

              {/* Mobile Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                  id="NavAcademic"
                >
                  Academic <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavDropdownMobile href="/AdmissionFee" text="↪ Admission fee" />
                    <NavDropdownMobile href="/Education-system" text="↪ Education system" />
                    <NavDropdownMobile href="/" text="↪ Result method" />
                    <NavDropdownMobile href="/" text="↪ Rules" />
                    <NavDropdownMobile href="/" text="↪ Co-curriculum" />
                    <NavDropdownMobile href="/" text="↪ Hostel rules" />
                    <NavDropdownMobile href="/" text="↪ Information for parents" />
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Menu Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                  id="Gallery"
                >
                  Gallery <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="pl-4 underline underline-offset-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavDropdownMobile2 href="/" text="↪ Photos" />
                    <NavDropdownMobile2 href="/" text="↪ Videos" />
                  </div>
                )}
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/Notices" text="Notices" />
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/contact" text="Contact" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarWithDropdown;
