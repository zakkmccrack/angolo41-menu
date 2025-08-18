import { supabase } from "./supabase";
import { Product } from "@/types/BaseProduct";

export async function getDraftDrinks(): Promise<Product[]> {
    const { data, error } = await supabase.from("draft_drinks").select("*").order('name', {ascending: true})
    if (error) {
        console.error("errore: ", error.message)
        return []
    }

    return data as Product[]
}
