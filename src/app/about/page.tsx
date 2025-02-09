"use client"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()

    return (
        <button onClick={() => router.push('/')} className="bg-blue-500 text-white p-2 rounded-md">Home</button>
    )
}
