// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import StudioArch from "@/public/Images/Studio Architect.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={StudioArch}
              alt="Studio Architect"
              className="w-24 mb-1 rounded-sm"
            />
            <p className="text-sm">
              Studio Architect is a leading architectural firm in Bangladesh,
              known for designing innovative, sustainable, and functional spaces
              that enhance the lives of our clients.
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
                <Link href="https://greenarchitectbd.com/about/">
                  <span className="hover:text-gray-400">About</span>
                </Link>
              </li>
              <li>
                <Link href="https://greenarchitectbd.com/blog/">
                  <span className="hover:text-gray-400">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="https://greenarchitectbd.com/faq">
                  <span className="hover:text-gray-400">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="https://greenarchitectbd.com/review">
                  <span className="hover:text-gray-400">Review</span>
                </Link>
              </li>
              <li>
                <Link href="https://greenarchitectbd.com/privacy-policy/">
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
                  <span>(+880) 01521254689</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:studioarchitect.bd@gmail.com"
                  className="flex items-center space-x-2 hover:text-gray-400"
                >
                  <i className="fas fa-envelope"></i>
                  <span>studioarchitect.bd@gmail.com</span>
                </a>
              </li>
              <li>
                <p className="flex items-center space-x-2 hover:text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    52/7 (2nd Floor), West Rajabazar, Panthapath, Dhaka-1215.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <h1 className="mr-2 text-xl font-mono">
            The website was created by-
          </h1>
          <div className="mt-2">
            <Link
              href="https://www.facebook.com/arifbillah64"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-y-green-600 border-x-white font-bold px-4 py-2 text-lg rounded-full underline underline-offset-4 text-white decoration-2 tracking-wider font-mono decoration-blue-600"
            >
              Arif Billah
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm px-1">
            © All Rights Reserved {new Date().getFullYear()} - Studio Architect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
