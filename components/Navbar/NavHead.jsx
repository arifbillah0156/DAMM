import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div className="bg-[#0072BC] text-white text-md md:text-lg p-1 md:p-2 tracking-wider text-center md:flex md:justify-center md:gap-8">
      <div className="">
        <Link
          href={"tel:+8801887997684"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-phone"></i>{" "}
          <span>+88 01887-997684</span>
        </Link>
      </div>
      <div className="">
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
