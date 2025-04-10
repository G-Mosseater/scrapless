"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Button } from "@/components/ui/button"
import { createProduct } from "@/services/products"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"


const AddProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(1)
  const [description, setDescription] = useState("")
  const [type, setType] = useState<"fruit" | "vegetable" | "">("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async () => {
    if (!name || !price || !quantity || !type || !imageUrl) {
      alert("Please fill in all fields and upload an image.")
      return
    }

    setLoading(true)
    try {
      await createProduct({
        name,
        price,
        quantity,
        description,
        type,
        image_url: imageUrl,
      })
      alert("Product created successfully!")
      router.push("/list")
    } catch (err) {
      console.error(err)
      alert("Error creating product.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-svh w-full items-center px-4 pt-4 pb-20">
      <FileUpload onUploadComplete={(url) => setImageUrl(url)} />

      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-1">
          <Label className="text-lg">Product Name</Label>
          <Input
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-lg">Price</Label>
          <Input
            type="number"
            className="w-full"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-lg">Type</Label>
          <Select onValueChange={(val) => setType(val as "fruit" | "vegetable")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="fruit">Fruit</SelectItem>
                <SelectItem value="vegetable">Vegetable</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-lg">Quantity</Label>
          <div className="flex items-center justify-end gap-2">
            <Button
              size="sm"
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </Button>
            <Input
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="w-16 text-center"
              type="number"
            />
            <Button size="sm" type="button" onClick={() => setQuantity((q) => q + 1)}>
              +
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-lg">Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <Button
        className="w-[200px] mt-4"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create"}
      </Button>
    </div>
  )
}

export default AddProduct
