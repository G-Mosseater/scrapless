"use client";

import { useState } from "react";
import NavBar from "@/components/nav-bar";
import SearchBar from "@/components/search-bar";
import BananarchyIcon from "@/components/bananarchy-icon";
import { Button } from "@/components/ui/button";
import ProductsComponent from "@/components/products-card-component";

export default function Page() {
    const [selected, setSelected] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
                <div className="flex flex-row items-center justify-center py-4">
                    <BananarchyIcon />
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>

            <div className="h-[80px]"></div>

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
            <ProductsComponent searchTerm={searchTerm} />

                <ProductsComponent />

                <div className="fixed bottom-0 left-0 w-full">
                    <NavBar />
                </div>
            </div>
        </div>
    );
}
