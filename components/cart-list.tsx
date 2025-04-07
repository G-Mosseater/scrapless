"use client"

import { useEffect, useState } from "react"
import { getCart } from "@/services/cart"
import type { CartItem } from "@/services/cart"
import CartCardComponent from "./cart-card-component"

interface CartListProps {
  onCartChange: (items: CartItem[]) => void;  // Nueva prop para pasar los productos
}

export default function CartList({ onCartChange }: CartListProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCartItems = async () => {
    try {
      const data = await getCart()
      setCartItems(data)
      onCartChange(data) // Pasar los productos al componente padre
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
    <div className="flex flex-col gap-6">
      {cartItems.map((item) => (
        <CartCardComponent key={item.id} item={item} onRefresh={fetchCartItems}/>
      ))}
    </div>
  )
}
