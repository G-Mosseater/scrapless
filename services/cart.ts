const API_URL = "/api/cart"

export type CartItem = {
  id: string
  product_id: string
  quantity: number
  price: number
  products: {
    name: string
    image_url: string
    price: number
    type: "fruit" | "vegetable"
  }
}

// Add a product
export async function addToCart({
  user_id,
  product_id,
  quantity,
}: {
  user_id: string
  product_id: string
  quantity: number
}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, product_id, quantity }),
  })

  if (!res.ok) throw new Error("Failed to add to cart")
  return res.json()
}

// Get the user cart
export async function getCart() {
  const res = await fetch(API_URL, {
    method: "GET",
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch cart")
  return res.json()
}

// Update the product amount
export async function updateCartItem({
  id,
  quantity,
}: {
  id: string
  quantity: number
}) {
  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, quantity }),
  })

  if (!res.ok) throw new Error("Failed to update item")
  return res.json()
}

// Delete an Item
export async function deleteCartItem(id: string) {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  })

  if (!res.ok) throw new Error("Failed to delete item")
  return res.json()
}
