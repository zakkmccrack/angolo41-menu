"use client"

import { useCart } from "@/context/CartContext"
import { motion } from "motion/react";
import { useState } from "react"

export default function CartFloater() {
    const { cart, removeFromCart } = useCart();
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);

    return (
        <div className="flex justify-center">
            <motion.div className="fixed bottom-2 z-50 w-2/3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                onClick={() => {if(show){alert("QUESTO NON SERVE PER ORDINARE, TI AIUTA A TENERE TRACCIA DI CIO' CHE VORRAI ORDINARE"); setShow(false)}}}
            >
                <button onClick={() => setOpen(!open)} className="p-2 bg-angolo-green text-white w-full max-h-[10vh]">
                    {open ? (
                        <p className="font-bold text-2xl">CLOSE</p>
                    ) : (
                        <p className="font-bold text-2xl">YOUR LIST</p>
                    )}
                </button>

                {open && (
                    <div className="bg-background border-2 max-h-[30vh] overflow-y-auto">
                        {cart.length === 0 ? (
                            <p className="font-bold text-xl p-2">Nessun Prodotto</p>
                        ) : (
                            <div className="flex flex-col justify-around">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex flex-row justify-around border-b-2 w-full max-h-4/6 p-5">
                                        <span className="font-bold text-xl">{item.name.toUpperCase()}</span>
                                        <button onClick={() => removeFromCart(item.name)} className="bg-gradient-to-r from-red-600 to-red-500 p-2 rounded-md">
                                            Rimuovi
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    )
}