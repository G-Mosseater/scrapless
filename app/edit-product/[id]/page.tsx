"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById, updateProduct, ProductUpdate } from "@/services/products"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import FileUpload from "@/components/file-upload"
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectItem
} from "@/components/ui/select"

export default function EditProductPage() {
  const { id } = useParams()
  const router = useRouter()

  const [product, setProduct] = useState<ProductUpdate | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    async function fetchProduct() {
      try {
        const data = await getProductById(id as string)
        setProduct(data)
      } catch (err) {
        console.error("Error fetching product", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleUpdate = async () => {
    if (!product) return
    try {
      await updateProduct(id as string, product)
      alert("Product updated!")
      router.push("/my-products")
    } catch (err) {
      console.error("Update error", err)
      alert("Error updating product")
    }
  }

  if (loading) return <p className="p-4">Loading...</p>
  if (!product) return <p className="p-4">Product not found</p>

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>

      <FileUpload onUploadComplete={(url) => setProduct((prev) => ({ ...prev!, image_url: url }))} />

      <Label>Name</Label>
      <Input value={product.name || ""} onChange={(e) => setProduct({ ...product!, name: e.target.value })} />

      <Label className="mt-2">Price</Label>
      <Input type="number" value={product.price || 0} onChange={(e) => setProduct({ ...product!, price: Number(e.target.value) })} />

      <Label className="mt-2">Quantity</Label>
      <Input type="number" value={product.quantity || 1} onChange={(e) => setProduct({ ...product!, quantity: Number(e.target.value) })} />

      <Label className="mt-2">Type</Label>
      <Select value={product.type} onValueChange={(value) => setProduct({ ...product!, type: value as "fruit" | "vegetable" })}>
        <SelectTrigger>
          <SelectValue placeholder="Select a type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="fruit">Fruit</SelectItem>
            <SelectItem value="vegetable">Vegetable</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Label className="mt-2">Description</Label>
      <Textarea value={product.description || ""} onChange={(e) => setProduct({ ...product!, description: e.target.value })} />

      <Button className="mt-4 w-full" onClick={handleUpdate}>Save Changes</Button>
    </div>
  )
}
