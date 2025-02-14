import { useLoaderData } from "react-router-dom"
import HostVan from "./HostVan"
import { requireAuth } from "../../../utils"
import { getVans } from "../../../api"
import '../../../server'

// eslint-disable-next-line react-refresh/only-export-components
export async function hostVansLoader({request}) {
    await requireAuth(request)
    return getVans()
}

export default function HostVans() {
    const hostVans = useLoaderData()
    const vanElements = hostVans.map(el => <HostVan key={el.id} van={el}/>)

    return (
        <section className="host-vans">
            <h1>Your listed vans</h1>
            <div className="host-vans-container">
                {vanElements}
            </div>
        </section>
    )
}
