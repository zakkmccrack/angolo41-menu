import { Product } from "@/types/BaseProduct"
import { useState } from "react"
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "motion/react"


type Props = {
    product: Product
}

export default function CardProduct({ product }: Props) {
    const [isVisible, setIsVisible] = useState(false)
    const { addToCart } = useCart();

    if (!product.visibility) return (<></>)

    return (
        <motion.div
            className="flex flex-col flex-wrap justify-between rounded-lg shadow-black shadow-md p-2 mb-5 min-w-fit bg-white border-1"
            onClick={() => setIsVisible(!isVisible)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <div className="flex flex-row justify-around">
                <p className="p-2 font-bold underline text-3xl text-foreground-red">{product.name.toUpperCase()}</p>
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
            <button
                onClick={() => addToCart(product)}
                className="bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600"
            >
                +
            </button>
            <AnimatePresence>
                {isVisible && product.description && (
                    <motion.div key="desc"
                        initial={{ opacity: -5.5, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                    >
                        <p className="p-2 text-xl">{product.description.toUpperCase()}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
