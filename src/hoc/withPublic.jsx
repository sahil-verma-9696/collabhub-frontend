import { useAppStore } from "@/context/GlobalContext"
import { useEffect } from "react"

export function withPublic(Component) {
    return function () {
        const { user, setUser } = useAppStore()
        async function getMe() {
            const res = await fetch("http://localhost:8000/auth/me", {
                credentials: "include"
            })
            const resData = await res.json()
            setUser(resData.user)
        }
        useEffect(() => {
            getMe()
        }, [])
        
        return <Component/>
    };
}