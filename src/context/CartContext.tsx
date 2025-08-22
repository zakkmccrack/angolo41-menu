'use client'

import { Product } from "@/types/BaseProduct"
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (name: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) setCart(JSON.parse(saved));
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
        console.log(product.name + " added to cart")
        console.log(cart)
    }

    const removeFromCart = (name: string) => {
        setCart((prev) => prev.filter((p) => p.name !== name
        ))
    }

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be inside CartProvider");
    return ctx;
}