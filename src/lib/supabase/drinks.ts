import { supabase } from "./supabase";
import { Drink } from "@/types/drink";

export async function getDrinks(): Promise<Drink[]> {
    const { data, error } = await supabase.from("drinks").select("*")
    if (error) {
        console.error("errore: ", error.message)
        return []
    } 

    return data as Drink[]
}

export async function addDrink(params:Omit<Drink, "id">) {
    const { error } = await supabase.from("drinks").insert([params])

    if (error) {
        console.error("errore: ", error.message)
        throw error
    }
}