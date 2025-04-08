import { createClient } from "@/lib/supabase/client"

export async function uploadProductImage(file: File): Promise<string> {
  const supabase = createClient()
  const filePath = `products/${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from("product-images") 
    .upload(filePath, file)

  if (error) throw new Error("Failed to upload image")

  const {
    data: { publicUrl },
  } = supabase.storage.from("products").getPublicUrl(filePath)

  return publicUrl
}
