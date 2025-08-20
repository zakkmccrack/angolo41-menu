'use client'

import CardProduct from "@/components/frontend/CardProduct";
import Spinner from "@/components/LoadingComponent";
import { readTableFromName } from "@/lib/supabase/services/productRepo";
import { Product } from "@/types/BaseProduct";
import { useEffect, useState } from "react";

export default function Wines() {
    const tables = ["whiskey", "rum", "liqueur"]
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

    if (loading) return (<Spinner />)

    return (
        <div className="flex flex-col justify-around bg-background p-6 max-w-full mx-auto w-full">
            <p className="text-center p-2 font-bold text-8xl text-foreground-red">DISTILLATI</p>
            <div className="flex justify-center">
                <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-md border text-2xl p-2 rounded-md focus:border-emerald-500 "
                >
                    <option value="all">TUTTI I PRODOTTI</option>
                    <option value="whiskey">WHISKEY</option>
                    <option value="rum">RUM</option>
                    <option value="liqueur">LIQUORI</option>
                </select>
            </div>
            {(productType === "whiskey" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">WHISKEY</p>
                    {tableProducts["whiskey"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                            table={"whiskey"}
                        />
                    ))}
                </>
            )}
            {(productType === "rum" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">RUM</p>
                    {tableProducts["rum"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                            table={"rum"}
                        />
                    ))}
                </>
            )}
            {(productType === "liqueur" || productType === "all") && (
                <>
                    <p className="p-2 font-bold text-3xl text-foreground-red text-center">LIQUORI</p>
                    {tableProducts["liqueur"].map((d) => (
                        <CardProduct
                            key={d.id}
                            product={d}
                            table={"liqueur"}
                        />
                    ))}
                </>
            )}
        </div >
    )
}