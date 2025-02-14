import { Suspense } from "react"
import { useLoaderData, defer, Await } from "react-router-dom"
import HostVan from "./HostVan"
import { requireAuth } from "../../../utils"
import { getVans } from "../../../api"
import '../../../server'

// eslint-disable-next-line react-refresh/only-export-components
export async function hostVansLoader({request}) {
    await requireAuth(request)
    return defer({hostVans: getVans()})
}

export default function HostVans() {
    const hostVansPromiseObject = useLoaderData()

    return (
        <section className="host-vans">
            <Suspense 
                fallback={<h1 className="loading-message"></h1>}
            >
                <h1>Your listed vans</h1>
                <div className="host-vans-container">  
                    <Await resolve={hostVansPromiseObject.hostVans}>
                        {loadedVans=> loadedVans.map(el => <HostVan key={el.id} van={el}/>)}
                    </Await>
                </div>
            </Suspense> 
        </section>
    )
}
