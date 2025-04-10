"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById, Product } from "@/services/products"
import { addToCart } from "@/services/cart"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import BananarchyIconTitle from "@/components/bananarchy-icon-title"

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

      if (!user) throw new Error("User not logged in")

      await addToCart({
        user_id: user.id,
        product_id: product!.id,
        quantity,
      })

      alert("Product added successfully")
      router.push("/list")
    } catch (err) {
      console.error(err)
      alert("Failed to add product")
    }
  }

  if (loading) return <p className="p-4">Loading product...</p>
  if (error || !product) return <p className="p-4">Product not found</p>

  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-96 mx-auto my-5">
        <BananarchyIconTitle />
      </div>


      <Image
        src={product.image_url || "/images/card.jpg"}
        alt={product.name}
        width={220}
        height={160}
        className="rounded-lg max-w-96 w-full max-h-96 h-auto object-cover"
      />
      <div className="flex justify-between w-11/12 mt-14 max-w-96">
        <h1 className="text-2xl font-semibold text-[#14213D] text-left">{product.name}</h1>
        <p className="text-xl text-[#14213D] font-semibold text-right">{product.price}$</p>
      </div>
      <div className="flex justify-between w-11/12 my-4 max-w-96">
        <h2>rating placeholder</h2>
        <div className="flex items-center gap-4">
          <Button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Button>
          <span className="text-lg">{quantity} Kg</span>
          <Button onClick={() => setQuantity((q) => q + 1)}>+</Button>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center px-2 my-6 max-w-96">
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
