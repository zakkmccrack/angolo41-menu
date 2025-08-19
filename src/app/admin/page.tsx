"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"

import { readTableFromName } from "@/lib/supabase/services/productRepo"

import { Product } from "@/types/BaseProduct"
import CardProductAdmin from "@/components/admin/CardProductAdmin"

export default function AdminPage() {

    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    const [tableProducts, setTableProducts] = useState<Record<string, Product[]>>({})

    const tables = ["drinks", "rum", "analcoholic", "beers", "draft_beers", "draft_drinks", "boards", "whiskey", "glass_wine", "bottled_wine", "gin", "carpaccio", "schiacce", "liqueur", "starter", "baked_potatoes"]

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push("/login")
            } else {
                setUser(session.user)
            }
        }
        checkSession()
    }, [router])

    useEffect(() => {

        const fetchData = async () => {

            const result: Record<string, Product[]> = {}

            for (const table of tables) {
                const prods = await readTableFromName(table); // <-- prods è Product[]
                result[table] = prods
                { console.log(table) };

            }

            setTableProducts(result);
            setLoading(false)

        };

        fetchData();
    }, [])

    if (loading) return <p>Loading</p>

    return (
        <div className="flex flex-col justify-around bg-background p-6 max-w-full mx-auto w-full">
            <div className="flex flex-row justify-around p-10 bg-linear-120 from-75% rounded-xl text-white bg-[url(../../public/adminBackground.svg)] bg-no-repeat bg-cover">
                <div>
                    <p className="text-xl font-bold">Pannello Admin</p>
                    <p>Benvenuto {user?.email}</p>
                </div>
                <div>
                    <button className="text-center p-2 border-2 rounded-md shadow-white shadow-sm animate-pulse hover:cursor-pointer" onClick={() => router.push('/admin/add')}>Nuovo Prodotto</button>
                </div>
            </div>
            <div className="flex flex-col justify-around">
                Filtri
            </div>

            {tables.map((table) => (
                <div className="p-5 max-h-fit border-t-6" key={table}>
                    <p className="text-4xl p-2 font-bold">{table.toUpperCase()}</p>
                    {table.length === 0 && <p>No {table} Disponibile</p>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" key={table}>
                        {tableProducts[table].map((d) => (
                            <CardProductAdmin
                                key={d.id}
                                product={d}
                                table={table}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
