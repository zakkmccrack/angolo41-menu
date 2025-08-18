import { supabase } from "./supabase";
import { Product } from "@/types/BaseProduct";

export async function getProduct(table: string, id: number): Promise<Product | null> {
    const { data, error } = await supabase.from(table).select("*").eq('id', id).single()
    if (error) {
        console.error("errore: ", error.message)
        return null
    }

    return data as Product
}
