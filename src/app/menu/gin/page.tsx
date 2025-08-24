'use client'

import CardProduct from "@/components/menu/CardProduct";
import Spinner from "@/components/LoadingComponent";
import { readTableFromName } from "@/lib/supabase/services/productRepo";
import { Product } from "@/types/BaseProduct";
import { useEffect, useState } from "react";

export default function Wines() {
    const tables = ["gin"]
    const [loading, setLoading] = useState(true)
    const [tableProducts, setTableProducts] = useState<Record<string, Product[]>>({})

    useEffect(() => {

        const fetchData = async () => {

            const result: Record<string, Product[]> = {}

            for (const table of tables) {
                const prods = await readTableFromName(table);
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
            <p className="text-center p-2 font-bold text-8xl text-foreground-red">GIN</p>
            {tableProducts["gin"].map((d) => (
                <CardProduct
                    key={d.id}
                    product={d}
                />
            ))}
        </div>
    )
}