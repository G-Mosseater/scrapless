"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex justify-around items-center w-[full] h-[75px] border-2 border-[#14213D] rounded-t-[10px] bg-white">
            
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/forgot-password") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]/30"}`}>
                <a href="/home">
                    <Image src="/icons/home-rounded.png" width={40} height={40} alt="Home" />
                </a>
            </div>

            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/store") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]/30"}`}>
                <a href="/list">
                    <Image src="/icons/store.png" width={40} height={40} alt="Store" />
                </a>
            </div>

            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/map") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]/30"}`}>
                <a href="/map">
                    <Image src="/icons/map-pin.png" width={40} height={40} alt="Map" />
                </a>
            </div>

            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/profile") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]/30"}`}>
                <a href="/profile">
                    <Image src="/icons/profile-fill.png" width={40} height={40} alt="Profile" />
                </a>
            </div>

            <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 
                ${isActive("/myBox") ? "bg-[#F0AF3E]" : "bg-opacity-0 hover:bg-[#F0AF3E]/30"}`}>
                <a href="/box">
                    <Image src="/icons/box-bold.png" width={40} height={40} alt="Box" />
                </a>
            </div>

        </div>
    );
}
