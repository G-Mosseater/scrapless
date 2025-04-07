"use client"

import { useState } from "react"
import CartList from "@/components/cart-list"
import BananarchyIconTitle from "@/components/bananarchy-icon-title"
import Image from "next/image"
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] pb-24 px-4 text-[#14213D]">
      <BananarchyIconTitle className={undefined} />

      <div className="flex flex-col items-center mt-6 mb-6">
        <h2 className="text-3xl font-bold mt-2">My Box</h2>
        <Image
          src="/images/fruit-box-image.png"
          width={130}
          height={130}
          alt="Fruit Box"
          className="mt-2"
        />
      </div>

      <div className="flex justify-center items-center">
        <CartList onCartChange={setCartItems} />
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mt-6">
        <div className="flex justify-between w-full px-4 text-lg font-semibold">
          <span>Total Amount</span>
          <span>{calculateTotal().toFixed(2)} $</span>
        </div>
        <Button className="bg-[#14213D] text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-[#1d2b50]">
          Buy
        </Button>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <NavBar />
      </div>
    </div>
  )
}
