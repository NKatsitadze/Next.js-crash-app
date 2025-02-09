"use client"
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export const Counter = () => {
    const { isLoaded, isSignedIn } = useAuth()
    const [count,setCount] = useState(0)

    if(!isLoaded || !isSignedIn) {
        return null
    }

    return <button onClick={() => setCount(count + 1)}>{count}</button>
}