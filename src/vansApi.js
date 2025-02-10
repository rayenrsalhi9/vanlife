export default async function getVans() {
    const data = await fetch('/api/vans')
    const res = await data.json()
    return res.vans
}