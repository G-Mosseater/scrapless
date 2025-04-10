import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// CREATE - POST
export async function POST(request: Request) {
  const body = await request.json()
  const { product_id, quantity } = body

  const supabase = createClient()
  const {
    data: { user },
    error: userError
  } = await (await supabase).auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!product_id || !quantity) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const { data: product, error: productError } = await (await supabase)
    .from("products")
    .select("price")
    .eq("id", product_id)
    .single()

  if (productError || !product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const unit_price = product.price
  const total_price = unit_price * quantity

  const { data: existingItem, error: fetchError } = await (await supabase)
    .from("cart")
    .select("*")
    .eq("user_id", user.id)
    .eq("product_id", product_id)
    .single()

  if (fetchError && fetchError.code !== "PGRST116") {
    return NextResponse.json({ error: fetchError.message }, { status: 500 })
  }

  if (existingItem) {
    const updatedQuantity = existingItem.quantity + quantity
    const updatedPrice = updatedQuantity * unit_price

    const { data, error } = await (await supabase)
      .from("cart")
      .update({
        quantity: updatedQuantity,
        price: updatedPrice,
      })
      .eq("id", existingItem.id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
  }

  const { data, error } = await (await supabase).from("cart").insert([{
    user_id: user.id,
    product_id,
    quantity,
    price: total_price,
  }])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

// READ - GET
export async function GET(request: Request) {
  const supabase = createClient()
  const {
    data: { user },
    error: userError
  } = await (await supabase).auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data, error } = await (await supabase)
    .from("cart")
    .select(`
      id,
      quantity,
      price,
      product_id,
      products (
        name,
        image_url,
        type,
        price
      )
    `)
    .eq("user_id", user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

// UPDATE - PUT (no cambia, solo actualiza por ID)
export async function PUT(request: Request) {
  const body = await request.json()
  const { id, quantity } = body

  if (!id || !quantity) {
    return NextResponse.json({ error: "Missing id or quantity" }, { status: 400 })
  }

  const supabase = createClient()

  const { data: cartItem, error: cartError } = await (await supabase)
    .from("cart")
    .select("product_id")
    .eq("id", id)
    .single()

  if (cartError || !cartItem) {
    return NextResponse.json({ error: "Cart item not found" }, { status: 404 })
  }

  const productId = cartItem.product_id

  const { data: product, error: productError } = await (await supabase)
    .from("products")
    .select("price")
    .eq("id", productId)
    .single()

  if (productError || !product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const unitPrice = product.price
  const totalPrice = unitPrice * quantity

  const { data, error } = await (await supabase)
    .from("cart")
    .update({
      quantity,
      price: totalPrice,
    })
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ message: "Cart item updated", data })
}

// DELETE - DELETE (no necesita cambio si ya tienes el ID del ítem)
export async function DELETE(request: Request) {
  const body = await request.json()
  const { id } = body

  const supabase = createClient()

  const { data, error } = await (await supabase)
    .from("cart")
    .delete()
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ message: "Product deleted", data })
}
