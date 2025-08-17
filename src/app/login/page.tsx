"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)

        } else {
            router.push("../admin")
        }
    }

    return (
        <div>
            <form
                onSubmit={handleLogin}
                className=""
            >
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=""
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=""
                />
                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}