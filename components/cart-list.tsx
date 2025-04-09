"use client"

import { useEffect, useState } from "react"
import { getCart } from "@/services/cart"
import type { CartItem } from "@/services/cart"
import CartCardComponent from "./cart-card-component"

interface CartListProps {
  onCartChange: (items: CartItem[]) => void;  // New prop to pass products
}

export default function CartList({ onCartChange }: CartListProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCartItems = async () => {
    try {
      const data = await getCart()
      setCartItems(data)
      onCartChange(data) // Pass the products to the parent component
    } catch (err: any) {
      setError(err.message || "Error fetching cart")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  if (loading) return <p>Loading cart...</p>
  if (error) return <p>Error: {error}</p>

  return (

    <div className="space-y-5">
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center">
          <CartCardComponent key={item.id} item={item} onRefresh={fetchCartItems} />
        </div>
      ))}
    </div>
  )
}
