"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import BananarchyIcon from "@/components/bananarchy-icon";

export default function TopNavBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/list" },
    { name: "Map", path: "/map" },
    { name: "MyBox", path: "/myBox" },
    { name: "Profile", path: "/my-profile" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-7xl mx-auto gap-4 flex-wrap lg:flex-nowrap">
        
        <div className="flex  items-center flex-grow">
          <BananarchyIcon />
        </div>

        <NavigationMenu className="flex justify-between w-full flex-grow">
          <NavigationMenuList className="flex gap-4 w-full justify-center">
            {menuItems.map(({ name, path }) => {
              const isActive = pathname === path;

              return (
                <NavigationMenuItem key={name}>
                  <Button
                    className={`${
                      isActive
                        ? "bg-[#F0AF3E] text-white"
                        : "bg-[#14213D] text-white"
                    } hover:bg-opacity-80 transition duration-300`}
                    onClick={() => router.push(path)}
                  >
                    {name}
                  </Button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
