import { supabase } from "./supabase";
import { Product } from "@/types/BaseProduct";

export async function getBottled_wine(): Promise<Product[]> {
    const { data, error } = await supabase.from("bottled_wine").select("*").order('name', {ascending: true})
    if (error) {
        console.error("errore: ", error.message)
        return []
    }

    return data as Product[]
}
