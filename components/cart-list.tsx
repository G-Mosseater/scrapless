"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/services/cart";
import type { CartItem } from "@/services/cart";
import CartCardComponent from "./cart-card-component";

import { Skeleton } from "./ui/skeleton";

interface CartListProps {
  onCartChange: (items: CartItem[]) => void; // New prop to pass products
}

export default function CartList({ onCartChange }: CartListProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCartItems = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
      onCartChange(data); // Pass the products to the parent component
    } catch (err: any) {
      setError(err.message || "Error fetching cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading)
    return (
      <div className="space-y-5 w-full">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 w-full">
            <Skeleton className="h-24 w-24 rounded-md" />
            <div className="flex-1 ml-4 space-y-2">
              <Skeleton className="h-5 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
              <Skeleton className="h-4 w-[40%]" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-5 w-[60%]" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-5 w-full">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center w-full">
          <CartCardComponent
            key={item.id}
            item={item}
            onRefresh={fetchCartItems}
          />
        </div>
      ))}
    </div>
  );
}
