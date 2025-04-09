"use client";

import { useState } from "react";
import SearchBar from "@/components/search-bar";
import BananarchyIcon from "@/components/bananarchy-icon";
import { Button } from "@/components/ui/button";
import ProductsComponent from "@/components/products-card-component";
import TopNavBar from "@/components/top-navigation-menu";
import Link from "next/link";

export default function Page() {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    return (
        <div className="flex flex-col items-center min-h-svh w-full mb-20">
            <div className="hidden lg:block w-full">
                <TopNavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="block lg:hidden fixed top-0 left-0 w-full bg-white z-50 shadow-md">
                <div className="flex flex-row items-center justify-center py-4 px-4">
                    <BananarchyIcon />
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>

            <div className="block h-[150px]"></div>

            <div className="flex justify-center gap-x-6 pt-5 pb-5">
                <Button
                    className={`${
                        activeButton === "fruit" ? "bg-[#F0AF3E] text-white" : "bg-[#14213D] text-white"
                    } hover:bg-opacity-80 transition duration-300`}
                    onClick={() => handleButtonClick("fruit")}
                >
                    Fruits
                </Button>

                <Button
                    className={`${
                        activeButton === "vegetable" ? "bg-[#F0AF3E] text-white" : "bg-[#14213D] text-white"
                    } hover:bg-opacity-80 transition duration-300`}
                    onClick={() => handleButtonClick("vegetable")}
                >
                    Vegetables
                </Button>

                <Button>
                    <Link href="/add-product">Create ad</Link>
                </Button>
            </div>

            <div>
                <ProductsComponent
                    searchTerm={searchTerm}
                    selectedCategory={activeButton}
                />
            </div>
        </div>
    );
}
