"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {


  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex justify-around items-center w-full h-[75px] border-t-2 border-[#14213D] rounded-t-[10px] bg-white shadow-md">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/home") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]"}`}
      >
        <Link href="/">
          <Image
            src="/icons/home-rounded.png"
            width={40}
            height={40}
            alt="Home"
          />
        </Link>
      </div>

      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/list") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]"}`}
      >
        <Link href="/list">
          <Image src="/icons/store.png" width={30} height={30} alt="Store" />
        </Link>
      </div>

      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/map") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]"}`}
      >
        <Link href="/map">
          <Image src="/icons/map-pin.png" width={40} height={40} alt="Map" />
        </Link>
      </div>


      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/myBox") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]"}`}
      >
        <Link href="/myBox">
          <Image src="/icons/box-bold.png" width={40} height={40} alt="Box" />
        </Link>
      </div>

      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/profile") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]"}`}
      >
        <Link href="/my-profile">
          <Image
            src="/icons/profile-fill.png"
            width={40}
            height={40}
            alt="Profile"
          />
        </Link>
      </div>
    </div>
  ); }