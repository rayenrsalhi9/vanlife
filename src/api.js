export async function getVans() {
    const data = await fetch('/api/vans')
    if (!data.ok) {
        throw {
            message: 'error fetching vans api',
            statusText: data.statusText,
            status: data.status
        }
    } else {
        const res = await data.json()
        return res.vans
    }
}

export async function getVanDetails(id) {
    const data = await fetch(`/api/vans/${id}`)
    if (!data.ok) {
        throw {
            message: 'error fetching van details',
            statusText: data.statusText,
            status: data.status
        }
    } else {
        const res = await data.json()
        return res.vans
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}