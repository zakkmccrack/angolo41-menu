"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import Input from "@/components/admin/Input"

export default function AddDrinkPage() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [price, setPrice] = useState("")
    const [visibility, setVisibility] = useState(true)
    const [type, setType] = useState("")
    const [productType, setProductType] = useState("drinks");

    const router = useRouter()

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault()

        if (productType === "drinks" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    description,
                    ingredients,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin/add")
            }
        } else if (productType === "baked_potatoes" || productType === "schiacce") {
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
                router.push("/admin/add")
            }
        } else if (productType === "whiskey" || productType === "rum" || productType == "liqueur" || productType == "gin") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    description,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin/add")
            }
        } else if (productType === "glass_wine" || productType === "bottled_wine" || productType === "beers") {
            const { error } = await supabase.from(productType).insert([
                {
                    name,
                    type,
                    description,
                    price: parseFloat(price),
                    visibility
                },
            ])
            if (error) {
                alert("errore: " + error.message)
            } else {
                alert(name + " aggiunto con successo")
                router.push("/admin/add")
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
                        <option value="drinks">Drink</option>
                        <option value="analcoholic">Analcolico</option>
                        <option value="baked_potatoes">Patate</option>
                        <option value="carpaccio">Carpacci</option>
                        <option value="beers">Birre</option>
                        <option value="boards">Taglieri</option>
                        <option value="bottled_wine">Vini in Bottiglia</option>
                        <option value="glass_wine">Vini in Calice</option>
                        <option value="gin">Gin</option>
                        <option value="liqueur">Amari</option>
                        <option value="whiskey">Whisky</option>
                        <option value="schiacce">Schiacce</option>
                        <option value="rum">Rum</option>
                    </select>
                </div>

                <Input
                    label="Nome"
                    value={name}
                    onChange={setName}
                    type="text"
                />

                {(productType === "drinks" || productType === "schiacce" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio" || productType === "baked_potatoes") && (
                    <>
                        <Input
                            label="Ingredienti"
                            value={ingredients}
                            onChange={setIngredients}
                            type="text"
                        />
                    </>
                )}

                {(productType === "drinks" || productType === "rum" || productType == "analcoholic" || productType == "tagboardslieri" || productType == "glass_wine" || productType == "bottled_wine" || productType === "gin" || productType === "liqueur" || productType == "whiskey" || productType == "beers") && (
                    <>
                        <Input
                            label="Descrizione"
                            value={description}
                            onChange={setDescription}
                            type="text"
                        />
                    </>
                )}

                <div className="flex flex-col space-y-1">
                    <label className="">Prezzo</label>
                    <input
                        type="number"
                        placeholder="8"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="focus:border-emerald-500 border m-2 p-5 bg-white/50 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="">Visibilità</label>
                    <input
                        type="checkbox"
                        checked={visibility}
                        onChange={(e) => setVisibility(e.target.checked)}
                        required
                        className="m-2 p-5 bg-white/50 border-3 border-black rounded-2xl outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="m-2 p-5 rounded-2xl outline-none bg-emerald-700"
                >
                    Aggiungi
                </button>
            </form>
        </div>
    )
}