"use client";

import { useState } from "react";
import NavBar from "@/components/nav-bar";
import SearchBar from "@/components/search-bar";
import BananarchyIcon from "@/components/bananarchy-icon";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function Page() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Contenedor fijo para la barra de búsqueda */}
            <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
                <div className="flex flex-row items-center justify-center py-4">
                    <BananarchyIcon />
                    <SearchBar />
                </div>
            </div>

            {/* Espaciador para evitar que el contenido se solape con la barra */}
            <div className="h-[80px]"></div>

            {/* Botones centrados con toggle */}
            <div className="flex justify-center gap-x-20 pt-20">
                <Button
                    // className={`w-[120px] border-2 transition-all duration-300 ${
                    //     selected === "Fruits"
                    //         ? "bg-white text-[#14213D] border-[#14213D]"
                    //         : "bg-[#14213D] text-white border-[#14213D]"
                    // }`}
                    // onClick={() => setSelected("Fruits")}
                >
                    Fruits
                </Button>

                <Button
                    // className={`w-[120px] border-2 transition-all duration-300 ${
                    //     selected === "Vegetables"
                    //         ? "bg-white text-[#14213D] border-[#14213D]"
                    //         : "bg-[#14213D] text-white border-[#14213D]"
                    // }`}
                    // onClick={() => setSelected("Vegetables")}
                >
                    Vegetables
                </Button>
            </div>

            {/* Contenedor de productos centrado */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-10 pt-14 pb-20">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            {/* Navbar fija abajo */}
            <div className="fixed bottom-0 left-0 w-full">
                <NavBar />
            </div>
        </div>
    );
}
