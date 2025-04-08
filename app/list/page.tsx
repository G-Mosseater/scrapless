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

      <div className="flex justify-center gap-x-6 pt-20">
        <Button
          variant={selected === "fruit" ? "default" : "outline"}
          onClick={() => setSelected("fruit")}
        >
          Fruits
        </Button>
        <Button
          variant={selected === "vegetable" ? "default" : "outline"}
          onClick={() => setSelected("vegetable")}
        >
          Vegetables
        </Button>
        <Button
          variant={selected === null ? "default" : "outline"}
          onClick={() => setSelected(null)}
        >
          All
        </Button>
      </div>

      <ProductsComponent searchTerm={searchTerm} selectedCategory={selected} />

      <div className="fixed bottom-0 left-0 w-full">
        <NavBar />
      </div>
    </div>
  );
}
