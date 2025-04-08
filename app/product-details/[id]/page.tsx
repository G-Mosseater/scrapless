"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById, Product } from "@/services/products"
import { addToCart } from "@/services/cart"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!id) return

    async function fetchProduct() {
      try {
        const fetched = await getProductById(id as string)
        setProduct(fetched)
      } catch (err: any) {
        setError("Error loading product.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = async () => {

    const supabase = await createClient()
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      console.log(user)

      if (!user) throw new Error("User not logged in")

      await addToCart({
        user_id: user.id,
        product_id: product!.id,
        quantity,
      })

      alert("Product added successfully")
      router.push("/product-list")
    } catch (err) {
      console.error(err)
      alert("Failed to add product")
    }
  }

  if (loading) return <p className="p-4">Loading product...</p>
  if (error || !product) return <p className="p-4">Product not found</p>

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden p-6 flex flex-col items-center gap-4">
      <Image
        src="/images/logo.png"
        alt="Scrapless logo"
        width={40}
        height={40}
      />

      <Image
        src={product.image_url || "/images/card.jpg"}
        alt={product.name}
        width={220}
        height={160}
        className="rounded-lg"
      />

      <h1 className="text-2xl font-semibold text-[#14213D]">{product.name}</h1>
      <p className="text-xl text-[#14213D] font-semibold">{product.price}$</p>

      <div className="flex items-center gap-4">
        <Button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Button>
        <span className="text-lg">{quantity} Kg</span>
        <Button onClick={() => setQuantity((q) => q + 1)}>+</Button>
      </div>

      <div className="text-sm text-gray-600 text-center px-2">
        <strong>Description:</strong>
        <p>{product.description}</p>
      </div>

      <Button
        size="sm"
        onClick={handleAddToCart}
      >
        Add to box
      </Button>
    </div>
  )
}
