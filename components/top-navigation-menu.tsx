"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SearchBar from "@/components/search-bar";
import BananarchyIcon from "@/components/bananarchy-icon";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

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
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/list" },
    { name: "Map", path: "/map" },
    { name: "Profile", path: "/profile" },
    { name: "MyBox", path: "/myBox" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-7xl mx-auto gap-4 flex-wrap lg:flex-nowrap">
        {/* Izquierda: Icono + SearchBar */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <BananarchyIcon />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Derecha: Botones como NavigationMenu */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {menuItems.map(({ name, path }) => {
              const isActive = pathname === path;

              return (
                <NavigationMenuItem key={name}>
                  <Button
                    className= {`${
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