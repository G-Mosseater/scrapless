"use client"

import Image from "next/image"
import { Button } from "../components/ui/button"
import { Plus, Minus } from "lucide-react"
import { updateCartItem, deleteCartItem } from "@/services/cart"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import type { CartItem } from "@/services/cart" 

type Props = {
  item: CartItem
  onRefresh: () => void
}

export default function CartCardComponent({ item, onRefresh }: Props) {
  const [loading, setLoading] = useState(false)

  const handleChange = async (amount: number) => {
    setLoading(true)
    const newQuantity = item.quantity + amount

    try {
      if (newQuantity <= 0) {
        await deleteCartItem(item.id)
      } else {
        await updateCartItem({ id: item.id, quantity: newQuantity })
      }
      onRefresh()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="rounded-3xl border-[hsl(var(--blues))] w-full ">
      <CardContent className="flex items-center p-4 w-full">
        <div className="w-24 h-24 overflow-hidden rounded-md">
          <Image
            src={item.products.image_url || "/images/template-image.png"}
            alt={item.products.name}
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-xl font-semibold">{item.products.name}</p>
          <p className="text-md">💰 {item.price.toFixed(2)} €</p>
          <p className="text-md text-gray-500">({item.quantity} kg)</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="default"
            className="bg-[#14213d] h-10 w-10 p-0"
            disabled={loading}
            onClick={() => handleChange(1)}
          >
            <Plus size={20} />
          </Button>
          <span className="text-lg font-medium">{item.quantity} kg</span>
          <Button
            variant="default"
            className="bg-[#14213d] h-10 w-10 p-0"
            disabled={loading}
            onClick={() => handleChange(-1)}
          >
            <Minus size={20} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
