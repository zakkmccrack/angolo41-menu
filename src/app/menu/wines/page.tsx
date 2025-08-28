'use client'

import CardProduct from "@/components/menu/CardProduct";
import Spinner from "@/components/LoadingComponent";
import { Product } from "@/types/BaseProduct";
import { useEffect, useState } from "react";
import { getWineFromType } from "@/lib/supabase/bottled_wine";

export default function Wines() {
    const types = ["Bianco", "Bollicine", "Rosso"]
    const [loading, setLoading] = useState(true)
    const [tableProducts, setTableProducts] = useState<Record<string, Product[]>>({})
    const [productType, setProductType] = useState("all");

    useEffect(() => {

        const fetchData = async () => {

            const result: Record<string, Product[]> = {}

            for (const type of types) {
                const prods = await getWineFromType(type);
                result[type] = prods
            }

            setTableProducts(result);
            setLoading(false)

        };

        fetchData();
    }, [])

    if (loading) return (<Spinner />)

    return (
        <div className="flex flex-col justify-around bg-background p-6 max-w-full mx-auto w-full">
            <p className="text-center p-2 font-bold text-8xl text-foreground-red">WINES</p>
            <div className="flex justify-center">
                <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-md border text-2xl p-2 rounded-md focus:border-emerald-500 "
                >
                    <option value="all">TUTTI I PRODOTTI</option>
                    <option value="Bianco">BIANCHI</option>
                    <option value="Rosso">ROSSI</option>
                    <option value="Bollicine">BOLLICINE</option>

                </select>
            </div>
            {(productType === "Bianco" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">BIANCHI</p>
                    {tableProducts["Bianco"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
            {(productType === "Rosso" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">ROSSI</p>
                    {tableProducts["Rosso"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                        />
                    ))}
                </>
            )}
            {(productType === "Bollicine" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">BOLLICINE</p>
                    {tableProducts["Bollicine"].map((d) => (
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