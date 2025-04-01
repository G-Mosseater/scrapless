import { supabase } from "@/lib/supabaseClient"


// Create a product
export async function createProduct(product: {
  name: string
  type: "fruit" | "vegetable"
  description?: string
  quantity: number
  price: number
  image_url?: string
}) {
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


//See a product
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

  //Edit a product
  export async function updateProduct(id: string, updatedFields: Partial<any>) {
    const { data, error } = await supabase
      .from("products")
      .update(updatedFields)
      .eq("id", id)
  
    if (error) throw error
    return data
  }
  
  //Delete a product
  export async function deleteProduct(id: string) {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)
  
    if (error) throw error
    return data
  }
  