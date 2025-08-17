import { supabase } from "./supabase";
import { Analcoholic } from "@/types/analcoholic";

export async function getDrinks(): Promise<Analcoholic[]> {
    const { data, error } = await supabase.from("drinks").select("*")
    if (error) {
        console.error("errore: ", error.message)
        return []
    } 

    return data as Analcoholic[]
}

export async function addDrink(params:Omit<Analcoholic, "id">) {
    const { error } = await supabase.from("analcoholic").insert([params])

    if (error) {
        console.error("errore: ", error.message)
        throw error
    }
}