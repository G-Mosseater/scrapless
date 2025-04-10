import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// CREATE - POST
export async function POST(request: Request) {
  const body = await request.json()
  const { name, type, description, quantity, price } = body

  const supabase = createClient()
  const {
    data: { user },
    error: userError
  } = await (await supabase).auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data, error } = await (await supabase).from("products").insert([
    {
      user_id: user.id,
      name,
      type,
      description,
      quantity,
      price,
    },
  ])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}


// READ - GET
export async function GET() {
  
  const supabase = createClient()

  const { data, error } = await (await supabase).from("products").select("*")
  

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

// UPDATE - PUT
export async function PUT(request: Request) {
  const body = await request.json()
  const { id, ...updates } = body

  const supabase = createClient()

  const { data, error } = await (await supabase)
    .from("products")
    .update(updates)
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

// DELETE - DELETE
export async function DELETE(request: Request) {
  const body = await request.json()
  const { id } = body

  const supabase = createClient()

  const { data, error } = await (await supabase)
    .from("products")
    .delete()
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ message: "Product deleted", data })
}
