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