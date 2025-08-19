"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import Input from "@/components/admin/Input"
import SubmitButton from "@/components/admin/SubmitButton"

export default function AddDrinkPage() {
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [visibility, setVisibility] = useState(true)
    const [productType, setProductType] = useState("drinks");

    const router = useRouter()

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault()

        if (productType === "drinks" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio" || productType === "baked_potatoes" || productType === "schiacce" || productType == "starter") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    ingredients,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin")
            }
        } else if (productType === "whiskey" || productType === "rum" || productType == "liqueur" || productType == "gin" || productType === "draft_drinks") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin")
            }
        } else if (productType === "glass_wine" || productType === "bottled_wine" || productType === "beers" || productType === "draft_beers") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    type,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin")
            }
        }
    }

    return (
        <div className="p-5 flex flex-col items-center justify-center min-h-screen w-full">
            <form onSubmit={handleAdd} className="flex flex-col justify-between p-6 rounded-2xl">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Tipo di prodotto</label>
                    <select
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="w-full border p-2 rounded-md focus:border-emerald-500"
                    >
                        <option value="drinks">DRINK</option>
                        <option value="analcoholic">ANALCOLICO</option>
                        <option value="beers">BIRRE</option>
                        <option value="draft_beers">BIRRE ALLA SPINA</option>
                        <option value="draft_drinks">BIBITE ALLA SPINA</option>
                        <option value="bottle_drinks">BIBITE IN BOTTIGLIA</option>
                        <option value="bottled_wine">VINI IN BOTTIGLIA</option>
                        <option value="glass_wine">VINI IN CALICE</option>
                        <option value="schiacce">SCHIACCE</option>
                        <option value="boards">TAGLIERI</option>
                        <option value="baked_potatoes">PATATE</option>
                        <option value="carpaccio">CARPACCI</option>
                        <option value="starter">STARTER</option>
                        <option value="gin">GIN</option>
                        <option value="rum">RUM</option>
                        <option value="liqueur">AMARI</option>
                        <option value="whiskey">WHISKY</option>
                    </select>
                </div>

                <Input
                    label="NOME"
                    value={name}
                    onChange={setName}
                    type="text"
                />

                {(productType === "drinks" || productType === "schiacce" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio" || productType === "baked_potatoes") && (
                    <>
                        <Input
                            label="INGREDIENTI"
                            value={ingredients}
                            onChange={setIngredients}
                            type="text"
                        />
                    </>
                )}

                {(productType === "beers" || productType === "bottled_wine" || productType == "glass_wine" || productType == "draft_beers") && (
                    <>
                        <Input
                            label="TYPE"
                            value={type}
                            onChange={setType}
                            type="text"
                        />
                    </>
                )}

                <Input
                    label="PREZZO"
                    type="number"
                    value={price}
                    onChange={setPrice}
                />

                <div className="flex flex-row space-y-1">
                    <label className="">VISIBILITÀ</label>
                    <input
                        type="checkbox"
                        checked={visibility}
                        onChange={(e) => setVisibility(e.target.checked)}
                        required
                        className="m-2 p-5 bg-white/50 border-3 border-black rounded-2xl outline-none"
                    />
                </div>
                <SubmitButton
                    label="AGGIUNGI"
                />
            </form>
        </div>
    )
}