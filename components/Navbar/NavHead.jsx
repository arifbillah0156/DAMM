import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div className="bg-[#0072BC] text-white text-md md:text-lg p-1 md:p-2 md:py-0 tracking-wider text-center md:flex md:justify-center md:gap-8">
      <div className="md:py-2">
        <Link
          href={"tel:+8801627449269"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-phone"></i>{" "}
          <span>+88 01627-449269</span>
        </Link>
      </div>
      <div className="md:py-2">
        <Link
          href={"mailto:azharmedia14@gmail.com"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-envelope"></i>{" "}
          <span>azharmedia14@gmail.com</span>
        </Link>
      </div>

    </div>
  );
};
export default NavHead;
