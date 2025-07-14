import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div className="bg-[#00a24f] text-white text-md p-2 tracking-wider text-center md:flex md:justify-center md:gap-4">
      <div>One click to your dream home.</div>
      <div className="">
        <Link
          href={"tel:+8801521254689"}
          className="ml-2 text-lg font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-phone text-xl"></i>{" "}
          <span>+88 01521-254689</span>
        </Link>
      </div>
      {/* <div className="">
        <Link
          href={"https://www.facebook.com/riaz.hosain.58"}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-lg font-mono tracking-normal flex justify-center items-center gap-3"
        >
          <i className="fa-brands fa-facebook text-xl"></i>{" "}
          <span>Ar Riazul Islam</span>
        </Link>
      </div> */}
    </div>
  );
};
export default NavHead;
