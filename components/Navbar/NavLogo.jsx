import Image from "next/image";
import Link from "next/link";
import DAMM from "@/public/Images/DAMM Logo SVG.svg";
import dammnamelogo from "@/public/Images/DAMM Name_Logo.jpg";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* মোবাইলের জন্য (DAMM logo) */}
      <Link href="/" className="text-2xl block md:hidden ml-6">
        <Image
          src={DAMM}
          width={50}
          alt="DAMM"
        />
      </Link>

      {/* ডেস্কটপের জন্য (Name logo) */}
      <Link href="/" className="hidden md:flex justify-center items-center">
        <Image
          src={dammnamelogo}
          alt="Name Logo"
          height={70}
        />
      </Link>
    </div>

  );
};

export default NavLogo;
