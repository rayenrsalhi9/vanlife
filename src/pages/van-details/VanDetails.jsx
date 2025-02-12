import { Link } from 'react-router-dom'
import { useLocation, useLoaderData } from 'react-router-dom'
import clsx from 'clsx'
import leftArrow from '../../assets/left-arrow.svg'
import { getVanDetails } from '../../vansApi'
import './VanDetails.css'

// eslint-disable-next-line react-refresh/only-export-components
export function vanDetailsLoader({ params }) {
    return getVanDetails(params.id)
}

export default function VanDetails() {
    const location = useLocation()

    const van = useLoaderData()

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
                    <Link 
                        to={location.state.search ? 
                            `..?${location.state.search}` : 
                            '..'} 
                        relative='path'
                    >
                        <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                        <p>Back to {location.state.search ? `${location.state.type || 'all'}`:'all'} vans</p>
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
