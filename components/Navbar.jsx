import Link from "next/link";
import React, { useState } from "react";

import { navicon } from "react-icons-kit/fa/navicon";

// import AiOutlineMenu from "@react-icon/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: "${color}" }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: "${textColor}" }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10">
          {nav ? (
            <navicon size={20} style={{ color: "${textColor}" }} />
          ) : (
            <navicon size={20} style={{ color: "${textColor}" }} />
          )}
        </div>
        {/* mobile menu
         */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl  hover:text-gray-500 ">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
