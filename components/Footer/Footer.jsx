// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import DAMM from "@/public/Images/DAMM Logo SVG.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={DAMM}
              alt="Studio Architect"
              className="w-24 mb-1 rounded-sm"
            />
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, minus tempora! Sunt aliquid sint dolore eius iste doloribus, adipisci error neque, odio sed animi nulla. Voluptates quisquam iure blanditiis ab!
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="hover:text-gray-400">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/About/PrincipalMessage">
                  <span className="hover:text-gray-400">About</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-gray-400">Academic</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-gray-400">Review</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-gray-400">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="https://greenarchitectbd.com/terms-conditions">
                  <span className="hover:text-gray-400">Terms & Condition</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+8801521254689"
                  className="flex items-center space-x-2 hover:text-gray-400"
                >
                  <i className="fas fa-phone-alt"></i>
                  <span>(+880) 01511-111111</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:darulazhar@gmail.com"
                  className="flex items-center space-x-2 hover:text-gray-400"
                >
                  <i className="fas fa-envelope"></i>
                  <span>darulazhar@gmail.com</span>
                </a>
              </li>
              <li>
                <p className="flex items-center space-x-2 hover:text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Road-20, Uttara, Dhaka-1230.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8 font-mono md:flex md:justify-center md:items-center md:gap-2">
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

              <span className="underline underline-offset-2">Arif Billah</span> <span>|</span> <span className="">IT Officer, DAMM</span>
            </Link>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm px-1">
            © All Rights Reserved {new Date().getFullYear()} - DAMM.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
