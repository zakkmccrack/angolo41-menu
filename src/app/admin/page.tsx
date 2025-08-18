"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { getDrinks } from "@/lib/supabase/drinks"
import { getRum } from "@/lib/supabase/rum"
import { getAnalcoholic } from "@/lib/supabase/analcoholic"
import { getBeers } from "@/lib/supabase/beers"
import { getBoards } from "@/lib/supabase/boards"
import { getWhiskey } from "@/lib/supabase/whiskey"
import { getGlass_wine } from "@/lib/supabase/glass_wine"
import { getBottled_wine } from "@/lib/supabase/bottled_wine"
import { getSchiacce } from "@/lib/supabase/schiacce"
import { getCarpaccio } from "@/lib/supabase/carpaccio"
import { getGin } from "@/lib/supabase/gin"
import { getPotatoes } from "@/lib/supabase/potatoes"
import { getLiqueur } from "@/lib/supabase/liqueur"
import { getDraftBeers } from "@/lib/supabase/draft_beers"
import { getDraftDrinks } from "@/lib/supabase/draft_drinks"

import { Product } from "@/types/BaseProduct"
import CardProductAdmin from "@/components/admin/CardProductAdmin"

export default function AdminPage() {

    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [drinks, setDrinks] = useState<Product[]>([])
    const [rum, setRum] = useState<Product[]>([])
    const [analcoholic, setAnalcoholic] = useState<Product[]>([])
    const [beers, setBeers] = useState<Product[]>([])
    const [draft_beers, setDraftBeers] = useState<Product[]>([])
    const [draft_drinks, setDraftDrinks] = useState<Product[]>([])
    const [boards, setBoards] = useState<Product[]>([])
    const [whiskeys, setWhiskeys] = useState<Product[]>([])
    const [glassWines, setGlassWines] = useState<Product[]>([])
    const [bottledWines, setBottledWines] = useState<Product[]>([])
    const [schiacce, setSchiacce] = useState<Product[]>([])
    const [carpaccio, setCarpaccio] = useState<Product[]>([])
    const [gin, setGin] = useState<Product[]>([])
    const [potatoes, setPotatoes] = useState<Product[]>([])
    const [liqueur, setLiqueur] = useState<Product[]>([])


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
        async function loadAll() {
            setDraftDrinks(await getDraftDrinks())
            setDrinks(await getDrinks())
            setRum(await getRum())
            setAnalcoholic(await getAnalcoholic())
            setBeers(await getBeers())
            setBoards(await getBoards())
            setWhiskeys(await getWhiskey())
            setGlassWines(await getGlass_wine())
            setBottledWines(await getBottled_wine())
            setSchiacce(await getSchiacce())
            setCarpaccio(await getCarpaccio())
            setGin(await getGin())
            setPotatoes(await getPotatoes())
            setLiqueur(await getLiqueur())
            setDraftBeers(await getDraftBeers())
        }
        loadAll()
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
            {/* drink list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Drinks</p>
                {drinks.length === 0 && <p>Nessun Drink Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {drinks.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="drinks"
                        />
                    ))}
                </div>
            </div>
            {/* Analcoholic list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Analcolici</p>
                {analcoholic.length === 0 && <p>Nessun Analcolico Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {analcoholic.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="analcoholic"
                        />
                    ))}
                </div>
            </div>
            {/* Rum list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Rum</p>
                {rum.length === 0 && <p>Nessun Rum Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {rum.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="rum"
                        />
                    ))}
                </div>
            </div>
            {/* Bottled Wines list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Vini in Bottiglia</p>
                {bottledWines.length === 0 && <p>Nessun Vino In Bottiglia Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bottledWines.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="bottled_wine"
                        />
                    ))}
                </div>
            </div>
            {/* Beers list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Birre</p>
                {beers.length === 0 && <p>Nessuna Birra Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {beers.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="beers"
                        />
                    ))}
                </div>
            </div>
            {/* Draft Beers list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Birre spina</p>
                {draft_beers.length === 0 && <p>Nessuna Birra alla spina Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {draft_beers.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="draft_beers"
                        />
                    ))}
                </div>
            </div>
            {/* Draft Drinks list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Bibite spina</p>
                {draft_drinks.length === 0 && <p>Nessuna Bibibta alla spina Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {draft_drinks.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="draft_drinks"
                        />
                    ))}
                </div>
            </div>
            {/* Glass Wines list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Vini in Calice</p>
                {glassWines.length === 0 && <p>Nessun Vino In Calice Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {glassWines.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="glass_wine"
                        />
                    ))}
                </div>
            </div>
            {/* Schiacce list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Schiacce</p>
                {schiacce.length === 0 && <p>Nessuna Schiaccia Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {schiacce.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="schiacce"
                        />
                    ))}
                </div>
            </div>
            {/* Carpaccio list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Carpacci</p>
                {carpaccio.length === 0 && <p>Nessun Carpaccio Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {carpaccio.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="carpaccio"
                        />
                    ))}
                </div>
            </div>
            {/* liqueur list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Amari</p>
                {liqueur.length === 0 && <p>Nessun Amaro Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {liqueur.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="liqueur"
                        />
                    ))}
                </div>
            </div>
            {/* gin list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Gin</p>
                {gin.length === 0 && <p>Nessun Gin Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {gin.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="gin"
                        />
                    ))}
                </div>
            </div>
            {/* whiskeys list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Whisky</p>
                {whiskeys.length === 0 && <p>Nessun whisky Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {whiskeys.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="whiskey"
                        />
                    ))}
                </div>
            </div>
            {/* boards list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Taglieri</p>
                {boards.length === 0 && <p>Nessun Tagliere Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {boards.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="boards"
                        />
                    ))}
                </div>
            </div>
            {/* potatoes list */}
            <div className="p-5 max-h-fit border-t-6">
                <p className="text-4xl p-2 font-bold">Patate</p>
                {potatoes.length === 0 && <p>Nessuna Patata Disponibile</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {potatoes.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="baked_potatoes"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
