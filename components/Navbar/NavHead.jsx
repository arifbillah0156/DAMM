import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div className="bg-[#0072BC] text-white text-md md:text-lg p-1 md:p-2 tracking-wider text-center md:flex md:justify-center md:gap-8">
      <div className="">
        <Link
          href={"tel:+8801521254689"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-phone"></i>{" "}
          <span>+88 01811-111111</span>
        </Link>
      </div>
      <div className="">
        <Link
          href={"mailto:darulazhar@gmail.com"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-envelope"></i>{" "}
          <span>darulazhar@gmail.com</span>
        </Link>
      </div>

    </div>
  );
};
export default NavHead;
