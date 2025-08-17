"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/supabase"
import { useRouter } from "next/navigation"
import Input from "@/components/admin/Input"
import SubmitButton from "@/components/admin/SubmitButton"

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
                <Input
                    label="email"
                    value={email}
                    type="email"
                    onChange={setEmail}
                />
                <Input
                    label="password"
                    value={password}
                    type="password"
                    onChange={setPassword}
                />
                <SubmitButton
                    label="Login"
                />
            </form>
        </div>
    )
}