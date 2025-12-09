// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import DAMM from "@/public/Images/DAMM Logo SVG.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-4 border-b border-gray-700">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={DAMM}
              alt="Studio Architect"
              className="w-24 mb-1 rounded-sm"
            />
            <p className="text-sm text-justify merriweather tracking-wider">
              Darul Azhar Model Madrasah has emerged as a promising educational institution, committed to providing inclusive and quality education for all.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start lg:ml-[30%]">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.youtube.com/@darulazharmtv3832">
                  <i className="fa-brands fa-square-youtube mr-2"></i>
                  <span className="hover:text-gray-300 underline underline-offset-4">YouTube</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/DarulAzharModelMadrasah/">
                  <i className="fa-brands fa-facebook mr-2"></i>
                  <span className="hover:text-gray-300 underline underline-offset-4">Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/saif.akhondoker">
                  <i className="fa-brands fa-facebook mr-2"></i>
                  <span className="hover:text-gray-300 underline underline-offset-4">Principal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start lg:ml-[10%]">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+8801919916222"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <i className="fas fa-phone-alt"></i>
                  <span>+88 01919-916222 (Principal)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801627449269"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <i className="fas fa-phone-alt"></i>
                  <span>+88 01627-449269 (Admin)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ksua1980@gmail.com"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <i className="fas fa-envelope"></i>
                  <span>ksua1980@gmail.com</span>
                </a>
              </li>
              <li>
                <p className="flex items-center space-x-2 hover:text-gray-300">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    House: 17, Road: 20, Sector: 04, Uttara, Dhaka.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4 font-mono md:flex md:justify-center md:items-center md:gap-2">
          <h1 className="">
            The website was developed by:
          </h1>
          <div className="">
            <Link
              href="https://www.facebook.com/arifbillah64"
              passHref
              target="_blank"
              rel="noopener noreferrer"

            >

              <span className="underline underline-offset-2">Arif Billah</span> <span>|</span>
            </Link>
            <span className=""> IT Officer, DAMM</span>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm px-1 merriweather">
            © All Rights Reserved {new Date().getFullYear()} - DAMM.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
