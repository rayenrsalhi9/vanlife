export default async function getVans() {
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