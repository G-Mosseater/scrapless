"use client"

import { createProduct } from "@/services/products"
import { useEffect } from "react"

export default function TestPage() {
  useEffect(() => {
    const test = async () => {
      try {
        const data = await createProduct({
          name: "Test Banana",
          type: "fruit",
          description: "Just a test 🍌",
          quantity: 5,
          price: 1.2,
        })
        console.log("Product created:", data)
      } catch (err) {
        console.error("Error creating product:", err)
      }
    }

    test()
  }, [])

  return <h1>Testing product creation… check console!</h1>
}
