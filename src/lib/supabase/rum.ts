import { supabase } from "./supabase";
import { Product } from "@/types/BaseProduct";

export async function getRum(): Promise<Product[]> {
    const { data, error } = await supabase.from("rum").select("*").order('name', {ascending: true})
    if (error) {
        console.error("errore: ", error.message)
        return []
    } 

    return data as Product[]
}
