import { useState, useEffect } from 'react'
import HostVan from "./HostVan"
import '../../server'

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(data => data.json())
            .then(res => setHostVans(res.vans))
            .catch(error => console.error("Error fetching vans:", error));
    }, [])

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
