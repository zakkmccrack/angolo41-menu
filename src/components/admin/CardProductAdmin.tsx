import { supabase } from "@/lib/supabase/supabase"
import { Product } from "@/types/BaseProduct"
import Link from "next/link"
import { useState } from "react"

type Props = {
    product: Product
    table: string
}

export default function CardProductAdmin({ product, table }: Props) {

    const [visible, setVisible] = useState(product.visibility)

    async function changeVisibility(table: string) {
        const { error } = await supabase.from(table).update({ visibility: !visible }).eq("id", product.id)

        if (!error) setVisible(!visible)
        else console.log(error)
    }
    return (
        <div className="flex flex-col flex-wrap justify-between rounded-lg shadow-black shadow-md p-2 mb-5 min-w-fit bg-white border-1" >
            <div className="flex flex-row justify-around">
                <p className="p-2 font-bold text-2xl">{product.name}</p>
                <p className="p-2 font-bold text-2xl">{product.price}</p>
            </div>
            <div>
                {(product.ingredients != null) && (
                    <>
                        <p className="p-2 text-xl">{product.ingredients}</p>
                    </>
                )
                }
            </div>
            <div>
                {(product.type != null) && (
                    <>
                        <p className="p-2 text-xl">{product.type}</p>
                    </>
                )
                }
            </div>
            <div className={` m-2 p-2 border-black rounded-2xl outline-none ${product.visibility === true ? "bg-angolo-green" : "bg-foreground-red"}`}>
                <label className="font-bold text-white" >Visibilità</label>
                <input
                    name={product.name}
                    type="checkbox"
                    checked={visible}
                    onChange={(e) => changeVisibility(table)}
                    className={`m-2 border-3 border-black rounded-2xl outline-none`}
                />
            </div>
            <Link href={{ pathname: '/admin/edit', query: { table: table, id: product.id } }} className="p-2 border-2 rounded-sm text-center font-bold text-xl" >EDIT</Link>
        </div>
    )
}
