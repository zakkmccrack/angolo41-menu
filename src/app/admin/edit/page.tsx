'use client'

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

import { getProduct } from "@/lib/supabase/getElementById"
import { Product } from "@/types/BaseProduct"
import { supabase } from "@/lib/supabase/supabase"
import Input from "@/components/admin/Input"
import SubmitButton from "@/components/admin/SubmitButton"
import Spinner from "@/components/LoadingComponent"


export default function EditPage() {
    return (
        <Suspense fallback={<Spinner/>}>
            <Content />
        </Suspense>
    );

    function Content() {
        const params = useSearchParams()
        const table = params.get('table') ?? ''
        const id = Number.parseInt(params.get('id') ?? '0')
        const [product, setProduct] = useState<Product | null>()
        const [name, setName] = useState("")
        const [ingredients, setIngredients] = useState("")
        const [price, setPrice] = useState("")
        const [productType] = useState(table)
        const [type, setType] = useState("bianco");

        useEffect(() => {
            async function loadAll() {
                const product = await getProduct(table, id)
                if (product) {
                    setProduct(product)
                    setName(product.name)
                    setIngredients(product.ingredients)
                    setType(product.type)
                    setPrice(product.price.toString())
                }
            }
            loadAll()
        }, [])

        const handleChange = async (e: React.FormEvent) => {
            e.preventDefault()

            if (productType === "drinks" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio" || productType === "baked_potatoes" || productType === "schiacce" || productType === "glass_wine" || productType === "bottled_wine" || productType === "beers") {
                const { error } = await supabase.from(productType).update([
                    {
                        "name": name,
                        "ingredients": ingredients,
                        "price": parseFloat(price),
                    },
                ]).eq("id", product?.id)
                if (error) {
                    alert("errore: " + error.message)
                } else {
                    alert(name + " aggiornato con successo")
                }
            } else if (productType === "whiskey" || productType === "rum" || productType == "liqueur" || productType == "gin" || productType === "draft_drinks") {
                const { error } = await supabase.from(productType).update(
                    {
                        "name": name,
                        "price": parseFloat(price),
                    },
                )
                if (error) {
                    alert("errore: " + error.message)
                } else {
                    alert(name + " aggiornato con successo")
                }
            }
        }

        return (
            <div>
                {(product != null) && (
                    <div className="p-5 flex flex-col items-center justify-center min-h-screen w-full">
                        <form onSubmit={handleChange}>
                            <Input
                                label="NOME"
                                value={name}
                                onChange={setName}
                                type="text"
                            />
                            {(productType === "drinks" || productType === "schiacce" || productType == "analcoholic" || productType == "boards" || productType == "carpaccio" || productType === "baked_potatoes") && (
                                <>
                                    <Input
                                        label="INGREDIENTS"
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
                            < Input
                                label="PREZZO"
                                value={price}
                                onChange={setPrice}
                                type="number"
                            />
                            <SubmitButton
                                label="AGGIORNA PRODOTTO"
                            />
                        </form>
                    </div>
                )}
            </div>
        )
    }
}