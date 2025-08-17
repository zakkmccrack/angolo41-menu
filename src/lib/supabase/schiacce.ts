import { supabase } from "./supabase";
import { Product } from "@/types/BaseProduct";

export async function getSchiacce(): Promise<Product[]> {
    const { data, error } = await supabase.from("schiacce").select("*").order('name', {ascending: true})
    if (error) {
        console.error("errore: ", error.message)
        return []
    }

    return data as Product[]
}
