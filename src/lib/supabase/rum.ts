import { supabase } from "./supabase";
import { Rum } from "@/types/rum";

export async function getDrinks(): Promise<Rum[]> {
    const { data, error } = await supabase.from("rum").select("*")
    if (error) {
        console.error("errore: ", error.message)
        return []
    } 

    return data as Rum[]
}

export async function addDrink(params:Omit<Rum, "id">) {
    const { error } = await supabase.from("rum").insert([params])

    if (error) {
        console.error("errore: ", error.message)
        throw error
    }
}