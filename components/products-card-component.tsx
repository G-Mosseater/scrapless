import { getAllProducts, Product } from "@/services/products";
import { useEffect, useState } from "react";


function ProductsComponent() {
    const [products, setProdurcts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {(
        async function fetchProducts() {
            try {
                const results = await getAllProducts()
                setProdurcts(results)
            } catch (err: any) {
                setError(err.message || "Error fetching products")
            } finally {
                setLoading(false)
            }
        }
    )()
    }, [])

    if (loading) return <p>Loading products...</p>
    if (error) return <p>Error: {error}</p>


    return (
        <div>
            {products.map((Product) => 
            <div key={Product.id}>
                <img src={Product.image_url} alt={Product.name}/>
                <h2>{Product.name}</h2>
            </div>          
            )}
        </div>
    );
}

export default ProductsComponent;