"use client";
import { useState, useEffect, useRef } from "react";
import DAMM from "@/public/Images/DAMM Logo SVG.svg";
import dammnamelogo from "@/public/Images/DAMM Name_Logo.jpg";
import Image from "next/image";
import {
    Home,
    ChevronDown,
    Menu,
    X,
    Phone,
    Mail,
    Bell,
    GraduationCap,
    BarChart3,
    FileText,
    Trophy,
    Building,
    Users,
    Image as ImageIcon,
    Video,
    Info,
    MessageSquare
} from "lucide-react";
import Link from "next/link";

const NavbarWithDropdown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutRef = useRef(null);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle dropdown timeouts for better UX
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleDropdownHover = (dropdown) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(dropdown);
    };

    const handleDropdownLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // NavHead component
    const NavHead = () => (
        <div className="bg-[#0072BC] text-white text-md md:text-lg p-1 md:p-2 md:py-0 tracking-wider text-center md:flex md:justify-center md:gap-8">
            <div className="md:py-2">
                <Link
                    href={"tel:+8801627449269"}
                    className="font-mono tracking-normal flex justify-center items-center gap-2"
                >
                    <Phone className="h-4 w-4" />
                    <span>+88 01627-449269</span>
                </Link>
            </div>
            <div className="md:py-2">
                <Link
                    href={"mailto:ksua1980@gmail.com"}
                    className="font-mono tracking-normal flex justify-center items-center gap-2"
                >
                    <Mail className="h-4 w-4" />
                    <span>ksua1980@gmail.com</span>
                </Link>
            </div>
        </div>
    );

    // NavLogo component
    const NavLogo = () => (
        <div className="flex items-center gap-2">
            {/* Mobile logo (DAMM logo) */}
            <Link href="/" className="block md:hidden">
                <Image
                    src={DAMM}
                    width={50}
                    height={50}
                    alt="DAMM"
                    className="w-12 h-12"
                />
            </Link>
            {/* Desktop logo (Name logo) */}
            <Link href="/" className="hidden md:flex justify-center items-center">
                <Image
                    src={dammnamelogo}
                    alt="Name Logo"
                    className="h-12 w-auto max-w-[300px]"
                    priority
                />
            </Link>
        </div>
    );

    // NavLinksDesktop component
    const NavLinksDesktop = ({ href, text, icon }) => (
        <Link
            href={href}
            className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-[#0072BC] hover:bg-blue-50 transition-all duration-200 group"
        >
            {icon && <span className="mr-2 text-[#0072BC] group-hover:text-blue-800">{icon}</span>}
            {text}
        </Link>
    );

    // NavLinksMobile component
    const NavLinksMobile = ({ href, text, icon }) => (
        <Link
            href={href}
            className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-[#0072BC] hover:bg-blue-50 transition-colors duration-200"
        >
            {icon && <span className="mr-2 text-[#0072BC]">{icon}</span>}
            {text}
        </Link>
    );

    // NavDropdownDesktop component
    const NavDropdownDesktop = ({ href, text, icon }) => (
        <Link
            href={href}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0072BC] transition-colors duration-200 group"
        >
            <span className="mr-3 text-[#0072BC] group-hover:text-blue-800">{icon}</span>
            <span className="font-medium">{text}</span>
        </Link>
    );

    // NavDropdownMobile component
    const NavDropdownMobile = ({ href, text, icon }) => (
        <Link
            href={href}
            className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-[#0072BC] hover:bg-blue-50 transition-colors duration-200"
        >
            <span className="mr-3 text-[#0072BC]">{icon}</span>
            {text}
        </Link>
    );

    return (
        <div
            className={`relative z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg"
                : "bg-white"
                }`}
        >
            <div className="border-b border-blue-100">
                <NavHead />
                {/* Nav Links with gradient background */}
                <nav className="bg-gradient-to-r from-white to-blue-50 text-[#0072BC] py-4 shadow-sm">
                    <div className="container mx-auto px-2 sm:px-2 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="hover:scale-105 transition-transform duration-200">
                                <NavLogo />
                            </div>
                            {/* Desktop Menu */}
                            <div className="hidden lg:flex font-medium tracking-wide space-x-1">
                                <div className="hover:scale-105 transition-transform duration-200">
                                    <NavLinksDesktop href="/" text="Home" icon={<Home className="h-4 w-4" />} />
                                </div>
                                {/* Dropdown Menu - Notices */}
                                <div
                                    className="relative z-10"
                                    onMouseEnter={() => handleDropdownHover("notices")}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeDropdown === "notices"
                                            ? "bg-blue-100 text-[#0072BC]"
                                            : "text-[#0072BC] hover:bg-blue-50"
                                            }`}
                                    >
                                        <Bell className="h-4 w-4 mr-2" />
                                        Notices
                                        <div
                                            className={`transition-transform duration-300 ${activeDropdown === "notices" ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </div>
                                    </button>
                                    {activeDropdown === "notices" && (
                                        <div
                                            className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-blue-100 overflow-hidden transition-all duration-200 opacity-100"
                                        >
                                            <div className="py-1">
                                                <NavDropdownDesktop
                                                    href="/Notices"
                                                    text="Official Notices"
                                                    icon={<Bell className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Notices/TeachersGuidelines"
                                                    text="Teachers' Guidelines"
                                                    icon={<FileText className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Dropdown Menu - Academic */}
                                <div
                                    className="relative z-10"
                                    onMouseEnter={() => handleDropdownHover("academic")}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeDropdown === "academic"
                                            ? "bg-blue-100 text-[#0072BC]"
                                            : "text-[#0072BC] hover:bg-blue-50"
                                            }`}
                                    >
                                        <GraduationCap className="h-4 w-4 mr-2" />
                                        Academic
                                        <div
                                            className={`transition-transform duration-300 ${activeDropdown === "academic" ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </div>
                                    </button>
                                    {activeDropdown === "academic" && (
                                        <div
                                            className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-blue-100 overflow-hidden transition-all duration-200 opacity-100"
                                        >
                                            <div className="py-1">
                                                <NavDropdownDesktop
                                                    href="/AdmissionFee"
                                                    text="Admission Fee"
                                                    icon={<Users className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Education-system"
                                                    text="Education System"
                                                    icon={<GraduationCap className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Result-method"
                                                    text="Result Method"
                                                    icon={<BarChart3 className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Rules"
                                                    text="Rules"
                                                    icon={<FileText className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Co-curriculum"
                                                    text="Co-curriculum"
                                                    icon={<Trophy className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Hostel-rules"
                                                    text="Hostel Rules"
                                                    icon={<Building className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Information-for-parents"
                                                    text="Information for Parents"
                                                    icon={<Users className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Dropdown Menu - Gallery */}
                                <div
                                    className="relative z-10"
                                    onMouseEnter={() => handleDropdownHover("gallery")}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeDropdown === "gallery"
                                            ? "bg-blue-100 text-[#0072BC]"
                                            : "text-[#0072BC] hover:bg-blue-50"
                                            }`}
                                    >
                                        <ImageIcon className="h-4 w-4 mr-2" />
                                        Gallery
                                        <div
                                            className={`transition-transform duration-300 ${activeDropdown === "gallery" ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </div>
                                    </button>
                                    {activeDropdown === "gallery" && (
                                        <div
                                            className="absolute left-0 mt-2 w-48 rounded-xl shadow-xl bg-white ring-1 ring-blue-100 overflow-hidden transition-all duration-200 opacity-100"
                                        >
                                            <div className="py-1">
                                                <NavDropdownDesktop
                                                    href="/Photos"
                                                    text="Photos"
                                                    icon={<ImageIcon className="h-5 w-5" />}
                                                />
                                                <NavDropdownDesktop
                                                    href="/Videos"
                                                    text="Videos"
                                                    icon={<Video className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="hover:scale-105 transition-transform duration-200">
                                    <NavLinksDesktop href="/About/PrincipalMessage" text="About" icon={<Info className="h-4 w-4" />} />
                                </div>
                                <div className="hover:scale-105 transition-transform duration-200">
                                    <NavLinksDesktop href="/Contact" text="Contact" icon={<MessageSquare className="h-4 w-4" />} />
                                </div>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-[#0072BC] p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 hover:scale-110"
                                >
                                    {isMenuOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-white border-t border-blue-100 transition-all duration-300">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div className="hover:translate-x-1 transition-transform duration-200">
                                    <NavLinksMobile href="/" text="Home" icon={<Home className="h-5 w-5" />} />
                                </div>
                                {/* Mobile Dropdown Menu - Notices */}
                                <div>
                                    <button
                                        onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
                                        className="flex items-center w-full px-3 py-3 rounded-lg text-base font-medium text-[#0072BC] hover:bg-blue-50 transition-colors duration-200 hover:translate-x-1"
                                    >
                                        <Bell className="h-5 w-5 mr-2" />
                                        <span>Notices</span>
                                        <div
                                            className={`transition-transform duration-300 ml-auto ${isDropdownOpen3 ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </button>
                                    {isDropdownOpen3 && (
                                        <div className="pl-4 space-y-1 overflow-hidden transition-all duration-300">
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Notices"
                                                    text="Official Notices"
                                                    icon={<Bell className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Notices/TeachersGuidelines"
                                                    text="Teachers' Guidelines"
                                                    icon={<FileText className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Mobile Dropdown Menu - Academic */}
                                <div>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center w-full px-3 py-3 rounded-lg text-base font-medium text-[#0072BC] hover:bg-blue-50 transition-colors duration-200 hover:translate-x-1"
                                    >
                                        <GraduationCap className="h-5 w-5 mr-2" />
                                        <span>Academic</span>
                                        <div
                                            className={`transition-transform duration-300 ml-auto ${isDropdownOpen ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="pl-4 space-y-1 overflow-hidden transition-all duration-300">
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/AdmissionFee"
                                                    text="Admission Fee"
                                                    icon={<Users className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Education-system"
                                                    text="Education System"
                                                    icon={<GraduationCap className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Result-method"
                                                    text="Result Method"
                                                    icon={<BarChart3 className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Rules"
                                                    text="Rules"
                                                    icon={<FileText className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Co-curriculum"
                                                    text="Co-curriculum"
                                                    icon={<Trophy className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Hostel-rules"
                                                    text="Hostel Rules"
                                                    icon={<Building className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Information-for-parents"
                                                    text="Information for Parents"
                                                    icon={<Users className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Mobile Dropdown Menu - Gallery */}
                                <div>
                                    <button
                                        onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                                        className="flex items-center w-full px-3 py-3 rounded-lg text-base font-medium text-[#0072BC] hover:bg-blue-50 transition-colors duration-200 hover:translate-x-1"
                                    >
                                        <ImageIcon className="h-5 w-5 mr-2" />
                                        <span>Gallery</span>
                                        <div
                                            className={`transition-transform duration-300 ml-auto ${isDropdownOpen2 ? "rotate-180" : ""}`}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </div>
                                    </button>
                                    {isDropdownOpen2 && (
                                        <div className="pl-4 space-y-1 overflow-hidden transition-all duration-300">
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Photos"
                                                    text="Photos"
                                                    icon={<ImageIcon className="h-5 w-5" />}
                                                />
                                            </div>
                                            <div className="hover:translate-x-1 transition-transform duration-200">
                                                <NavDropdownMobile
                                                    href="/Videos"
                                                    text="Videos"
                                                    icon={<Video className="h-5 w-5" />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="hover:translate-x-1 transition-transform duration-200">
                                    <NavLinksMobile href="/About/PrincipalMessage" text="About" icon={<Info className="h-5 w-5" />} />
                                </div>
                                <div className="hover:translate-x-1 transition-transform duration-200">
                                    <NavLinksMobile href="/Contact" text="Contact" icon={<MessageSquare className="h-5 w-5" />} />
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default NavbarWithDropdown;