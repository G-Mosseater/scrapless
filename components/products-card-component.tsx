"use client";

import { getAllProducts, Product } from "@/services/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

type ProductsComponentProps = {
  searchTerm: string;
  selectedCategory: string | null;
};

function ProductsComponent({
  searchTerm,
  selectedCategory,
}: ProductsComponentProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const results = await getAllProducts();
        setProducts(results);
      } catch (err: any) {
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.type === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link key={product.id} href={`/product-details/${product.id}`}>
            <Card className="w-[130px] h-[190px] border-[1px] border-[#14213D] rounded-2xl overflow-hidden">
              <CardContent className="flex justify-center items-center p-0 h-[160px]">
                <div className="w-[130px] h-[160px] overflow-hidden">
                  <Image
                    src={product.image_url || "/images/card.jpg"}
                    width={130}
                    height={160}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-center items-center h-[30px] border-[#14213D]">
                <p
                  className="text-sm font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[110px] h-[20px]"
                  title={product.name}
                >
                  {product.name}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
}

export default ProductsComponent;
