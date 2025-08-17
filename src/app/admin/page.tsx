"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"

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

import { Product } from "@/types/BaseProduct"
import CardProductAdmin from "@/components/admin/CardProductAdmin"

export default function AdminPage() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const [drinks, setDrinks] = useState<Product[]>([])
    const [rum, setRum] = useState<Product[]>([])
    const [analcoholic, setAnalcoholic] = useState<Product[]>([])
    const [beers, setBeers] = useState<Product[]>([])
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
        }
        loadAll()
    }, [])

    if (loading) return <p>Loading</p>

    return (
        <div className="flex flex-col justify-around bg-background p-6 max-w-full mx-auto w-full">
            <div className="flex flex-row p-10 bg-linear-120 from-75% rounded-3xl text-white  bg-[url(../../public/adminBackground.svg)] bg-no-repeat bg-cover">
                <div>
                    <p className="text-xl font-bold">Pannello Admin</p>
                    <p>Benvenuto {user.email}</p>
                </div>
                <div>
                    <a href="/admin/add">ccccxcxcxc</a>
                </div>
            </div>
            <div className="flex flex-col justify-around">
                Filtri
            </div>
            {/* drink list */}
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Drinks</p>
                {drinks.length === 0 && <p>Nessun Drink Disponibile</p>}
                <div className="flex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Analcolici</p>
                {analcoholic.length === 0 && <p>Nessun Analcolico Disponibile</p>}
                <div className="flex flex-col overflow-x-scroll">
                    {analcoholic.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="analcoholics"
                        />
                    ))}
                </div>
            </div>
            {/* Rum list */}
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Rum</p>
                {rum.length === 0 && <p>Nessun Rum Disponibile</p>}
                <div className="flex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Vini in Bottiglia</p>
                {bottledWines.length === 0 && <p>Nessun Vino In Bottiglia Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
                    {bottledWines.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="bottled_wine"
                        />
                    ))}
                </div>
            </div>
            {/* Glass Wines list */}
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Vini in Calice</p>
                {glassWines.length === 0 && <p>Nessun Vino In Calice Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Schiacce</p>
                {schiacce.length === 0 && <p>Nessuna Schiaccia Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Carpacci</p>
                {carpaccio.length === 0 && <p>Nessun Carpaccio Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Amari</p>
                {liqueur.length === 0 && <p>Nessun Amaro Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Gin</p>
                {gin.length === 0 && <p>Nessun Gin Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Whisky</p>
                {whiskeys.length === 0 && <p>Nessun whisky Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
                    {rum.map((d) => (
                        <CardProductAdmin
                            key={d.id}
                            product={d}
                            table="whiskey"
                        />
                    ))}
                </div>
            </div>
            {/* boards list */}
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Taglieri</p>
                {boards.length === 0 && <p>Nessun Tagliere Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
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
            <div className=" p-5  max-h-fit">
                <p className="text-4xl p-2 font-bold">Patate</p>
                {potatoes.length === 0 && <p>Nessuna Patata Disponibile</p>}
                <div className="lex flex-col overflow-x-scroll">
                    {rum.map((d) => (
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
