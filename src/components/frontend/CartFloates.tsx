"use client"

import { useCart } from "@/context/CartContext"
import { motion } from "motion/react";
import { useState } from "react"

export default function CartFloater() {
    const { cart, removeFromCart } = useCart();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState(false)
    return (
        <motion.div className="fixed bottom-4 right-4 z-50">
            <button onClick={() => setOpen(!open)} className="rounded-full p-4 bg-angolo-green text-white w-full">
                {open ? (
                    <p>chiudi</p>
                ) : (
                    <p>cart</p>
                )}
            </button>

            {open && (
                <div className="w-fit bg-background border-2">
                    {cart.length === 0 ? (
                        <p>Nessun Prodotto</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 p-10">
                            {cart.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 p-1 w-full border-2">
                                    <span className="border-b-2 font-bold text-xl">{item.name.toUpperCase()}</span>
                                    <button onClick={() => removeFromCart(item.name)} className="bg-red-500">
                                        Rimuovi
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    )
}