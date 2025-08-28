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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <div className="flex flex-row justify-around border-b-2">
                <p className="p-2 font-bold text-3xl text-foreground-red">{product.name.toUpperCase()}</p>
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

            <div className="flex flex-row justify-around w-full pt-2">
                {product.description && (
                    <button onClick={() => setIsVisible(!isVisible)} className="bg-angolo-green text-white px-3 py-1 rounded-md hover:bg-green-contrast">
                        {(!isVisible) ? (<p>SHOW INFO</p>) : (<p>HIDE INFO</p>)}
                    </button>
                )}
                <button
                    onClick={() => addToCart(product)}
                    className="bg-angolo-green text-white px-3 py-1 rounded-md hover:bg-green-contrast"
                >
                    ADD TO LIST
                </button>
            </div>

            <AnimatePresence>
                {isVisible && product.description && (
                    <motion.div key="desc"
                        initial={{ opacity: 0, height: 0 }}
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
