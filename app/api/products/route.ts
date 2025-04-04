import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

// CREATE - POST
export async function POST(request: Request) {
  const body = await request.json()
  const { name, type, description, quantity, price } = body

  const { data, error } = await supabase.from("products").insert([
    {
      user_id: "5d8670d8-14e3-4b24-aa3d-947d2137e907",
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
  const { data, error } = await supabase.from("products").select("*")

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

// UPDATE - PUT
export async function PUT(request: Request) {
  const body = await request.json()
  const { id, ...updates } = body

  const { data, error } = await supabase
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

  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ message: "Product deleted", data })
}
