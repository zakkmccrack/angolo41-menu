'use client'

import CardProduct from "@/components/menu/CardProduct";
import { readTableFromName } from "@/lib/supabase/services/productRepo"
import { Product } from "@/types/BaseProduct";
import { useEffect, useState } from "react";
import Spinner from "@/components/LoadingComponent";
export default function Food() {

    const tables = ["carpaccio", "schiacce", "starter", "baked_potatoes"]
    const [loading, setLoading] = useState(true)
    const [tableProducts, setTableProducts] = useState<Record<string, Product[]>>({})
    const [productType, setProductType] = useState("all");

    useEffect(() => {

        const fetchData = async () => {

            const result: Record<string, Product[]> = {}

            for (const table of tables) {
                const prods = await readTableFromName(table); // <-- prods è Product[]
                result[table] = prods
            }

            setTableProducts(result);
            setLoading(false)

        };

        fetchData();
    }, [])

    if (loading) return (<Spinner/>)

    return (
        <div className="flex flex-col justify-around bg-background p-6 max-w-full mx-auto w-full">
            <p className="text-center p-2 font-bold text-8xl text-foreground-red">FOOD</p>
            <div className="flex justify-center">
                <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-md border text-2xl p-2 rounded-md focus:border-emerald-500 "
                >
                    <option value="all">TUTTI I PRODOTTI</option>
                    <option value="carpaccio">CARPACCI</option>
                    <option value="schiacce">SCHIACCE</option>
                    <option value="starter">STARTER</option>
                    <option value="baked_potatoes">PATATE</option>
                </select>
            </div>
            {(productType === "schiacce" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">SCHIACCE</p>
                    {tableProducts["schiacce"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
            {(productType === "starter" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">STARTER</p>
                    {tableProducts["starter"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
            {(productType === "carpaccio" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">CARPACCI</p>
                    {tableProducts["carpaccio"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
            {(productType === "baked_potatoes" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">PATATE AL FORNO</p>
                    {tableProducts["baked_potatoes"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
        </div >
    )
}