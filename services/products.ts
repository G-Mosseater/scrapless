import { supabase } from "@/lib/supabaseClient"

export type Product = {
  id: string
  user_id: string
  name: string
  type: "fruit" | "vegetable"
  description?: string
  quantity: number
  price: number
  image_url?: string
  created_at?: string
}

export type ProductUpdate = Partial<Omit<Product, "id" | "user_id" | "created_at">>

// Create a product (Logged User)
export async function createProduct(product: ProductUpdate) {
  const user = (await supabase.auth.getUser()).data.user
  if (!user) throw new Error("User not logged in")

  const { data, error } = await supabase.from("products").insert([
    {
      user_id: user.id,
      ...product,
    },
  ])

  if (error) throw error
  return data
}

// Get User product
export async function getUserProducts() {
  const user = (await supabase.auth.getUser()).data.user
  if (!user) throw new Error("User not logged in")

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user.id)

  if (error) throw error
  return data
}

//Get Product by Id
export async function getProductById(id: string): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw new Error("Failed to fetch product")
  return data
}


// Get All products
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*")

  if (error) throw error
  return data
}

// Edit a product
export async function updateProduct(id: string, updatedFields: ProductUpdate) {
  const { data, error } = await supabase
    .from("products")
    .update(updatedFields)
    .eq("id", id)

  if (error) throw error
  return data
}

// Delete a product
export async function deleteProduct(id: string) {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)

  if (error) throw error
  return data
}
