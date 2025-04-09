"use client";

import { useState } from "react";
import CartList from "@/components/cart-list";
import BananarchyIconTitle from "@/components/bananarchy-icon-title";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TopNavBar from "@/components/top-navigation-menu";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="relative flex flex-col justify-start min-h-screen bg-[#FFFFFF] px-4 text-[#14213D] mt-[120px] lg:mt-0 pb-20">

      <div className="hidden lg:block fixed top-0 w-full z-50">
        <TopNavBar
          searchTerm={""}
          setSearchTerm={function (term: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>

      <div className="block lg:hidden fixed top-0 left-0 w-full h-[120px] bg-white z-50 shadow-md">
        <div className="flex items-center justify-center h-full">
          <BananarchyIconTitle />
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 lg:mt-40 mb-6">
        <h2 className="text-3xl font-bold mt-2">My Box</h2>
        <Image
          src="/images/fruit-box-image.png"
          width={130}
          height={130}
          alt="Fruit Box"
          className="mt-2"
        />
      </div>

      <div className="flex flex-col items-center space-y-5">
        <CartList onCartChange={setCartItems} />
        <div className="flex justify-between w-full px-4 text-lg font-semibold ">
          <span>Total Amount</span>
          <span>{calculateTotal().toFixed(2)} $</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mt-6 mb-6 w-full">
        <Button className="bg-[#14213D] text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-[#1d2b50]">
          Buy
        </Button>
      </div>

    </div>
  );
}
