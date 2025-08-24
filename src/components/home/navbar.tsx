"use client"

import { useState } from "react"

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }


    return (
        <>
            <div className="flex flex-row justify-between bg-black text-white p-5" id="navbar">
                <div><p className="font-bold text-xl">CHI SIAMO</p></div>
                <div><p className="font-bold text-xl">GALLERIA</p></div>
                <div><p className="font-bold text-xl">CONTATTI</p></div>
                <div><p className="font-bold text-xl">PRENOTARE</p></div>
            </div>
        </>
    )
}