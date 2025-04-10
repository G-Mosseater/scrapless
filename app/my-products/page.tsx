"use client"

import { getUserProducts, deleteProduct } from "@/services/products"
import { useEffect, useState } from "react"
import { Product } from "@/services/products"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import BananarchyIcon from "@/components/bananarchy-icon"

export default function MyProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserProducts()
        setProducts(data)
      } catch (err) {
        console.error("Failed to fetch user products", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return

    try {
      await deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.id !== id))
    } catch (err) {
      alert("Failed to delete product")
    }
  }

  const handleEdit = (id: string) => {
    router.push(`/edit-product/${id}`)
  }

  if (loading) return <p className="p-4">Loading...</p>

  return (
    <>
      <div className="flex justify-center items-center h-16">
  <div className="flex items-center gap-2">
    <BananarchyIcon />
    <h1 className="text-3xl font-bold">my products</h1>
  </div>
</div>


      <div className="flex justify-around px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="relative py-4 flex flex-col items-center gap-3">
              <CardContent className="flex justify-center items-center p-0 h-[160px]">
                <div className="w-[130px] h-[160px] overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={product.image_url || "/images/card.jpg"}
                    width={130}
                    height={160}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-center">{product.name}</p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleEdit(product.id)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )

}
