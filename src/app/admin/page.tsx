"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import { getDrinks, addDrink } from "@/lib/supabase/drinks"
import { Drink } from "@/types/drink"
import CardDrink from "@/components/admin/CardDrink"

export default function AdminPage() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const [drinks, setDrinks] = useState<Drink[]>([])


    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push("/login")
            } else {
                setUser(session.user)
            }
            setLoading(false)
        }
        checkSession()
    }, [router])

    useEffect(() => {
        async function loadDrinks() {
            const items = await getDrinks()
            setDrinks(items)
            console.log(user)
        }
        loadDrinks()
    })

    if (loading) return <p>Loading</p>

    return (
        <div className="flex flex-col justify-around p-6 max-w-3xl mx-auto bg-red-500 rounded-2xl">
            <div className="flex flex-col p-10 bg-amber-500 rounded-3xl">
                <p className="text-xl font-bold">Pannello Admin</p>
                <p>Benvenuto {user.email}</p>
            </div>

            {/* drink list */}
            <div className="bg-indigo-400 p-5">
                <p className="text-2xl p-2">Drinks</p>
                {drinks.length === 0 && <p>Nessun Drink Disponibile</p>}
                <div>
                    {drinks.map((d) => (
                        <CardDrink
                            key={d.id}
                            drink={d}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
