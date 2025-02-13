import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || false
    if (!isLoggedIn){
        const response = redirect("/login?message=Login first to procceed")
        response.body = true
        throw response
    }
    return null
}