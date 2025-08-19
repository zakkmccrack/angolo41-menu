import { Product } from "@/types/BaseProduct"

type Props = {
    product: Product
    table: string
}

export default function CardProduct({ product }: Props) {
    return (
        <div className="flex flex-col flex-wrap justify-between rounded-lg shadow-black shadow-md p-2 mb-5 min-w-fit bg-white border-1" >
            <div className="flex flex-row justify-around">
                <p className="p-2 font-bold text-2xl text-foreground-red">{product.name.toUpperCase()}</p>
                <p className="p-2 font-bold text-2xl">{product.price}</p>
            </div>
            <div>
                {(product.ingredients != null) && (
                    <>
                        <p className="p-2 text-xl">{product.ingredients.toUpperCase()}</p>
                    </>
                )
                }
            </div>
            <div>
                {(product.type != null) && (
                    <>
                        <p className="p-2 text-xl">{product.type.toUpperCase()}</p>
                    </>
                )
                }
            </div>
        </div>
    )
}
