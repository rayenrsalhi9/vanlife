import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Van from './Van'
import './Vans.css'
import '../../server'

export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('api/vans')
            .then(data => data.json())
            .then(res => setVans(res.vans))
            .catch(error => console.error("Error fetching word:", error));
    }, [])

    const vansElements = vans.map(el => {
        const vanClassName = clsx({
            'simple': el.type === 'simple',
            'rugged': el.type === 'rugged',
            'luxury': el.type === 'luxury'
        })
        return <Van key={el.id} van={el} vanClassName={vanClassName}/>
    })
    
    return (
        <section className="vans">
            {vansElements}
        </section>
    )
}
