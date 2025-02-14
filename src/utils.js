import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem('isLoggedIn') || false
    if (!isLoggedIn){
        const response = redirect(`/login?message=Login first to procceed&pathname=${pathname}`)
        response.body = true
        throw response
    }
    return null
}