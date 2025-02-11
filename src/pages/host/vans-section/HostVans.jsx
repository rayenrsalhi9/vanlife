import { useLoaderData } from "react-router-dom"
import HostVan from "./HostVan"
import '../../../server'

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
