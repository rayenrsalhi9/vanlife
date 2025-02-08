import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import leftArrow from '../../assets/left-arrow.svg'
import './VanDetails.css'

export default function VanDetails() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(data => data.json())
        .then(res => setVan(res.vans))
        .catch((error) => console.error(`Error fetching data: ${error}`))
    }, [params.id])

    const className = clsx({
        'type': true,
        'simple': van && van.type === 'simple',
        'rugged': van && van.type === 'rugged',
        'luxury': van && van.type === 'luxury',
    })
    
    return (
        <section className="details">
            {van ? (
                <>
                    <Link to='..' relative='path'>
                        <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                        <p>Back to all vans</p>
                    </Link>
                    <img src={van.imageUrl} alt="van details image" className='details-img'/>
                    <div className="text">
                        <p className={className}>{van.type}</p>
                        <h1>{van.name}</h1>
                        <div className="price">
                            <p>${van.price}</p>
                            <span>/day</span>
                        </div>
                        <p>{van.description}</p>
                    </div>
                    <button className="rent-button">Rent this van</button>
                </>
            ) : <h1 className='loading-message'>Loading...</h1>}
        </section>
    )
}
