import { useState, useEffect } from "react"
import { useParams, Link, NavLink } from "react-router-dom"
import clsx from "clsx"
import leftArrow from '../../../../assets/left-arrow.svg'
import './HostVanDetails.css'

export default function HostVanDetails() {
    const [details, setDetails] = useState({})
    const id = useParams().id
    const typeClassName = clsx({
        'type': true,
        'simple': details && details.type === 'simple',
        'rugged': details && details.type === 'rugged',
        'luxury': details && details.type === 'luxury'
    })

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(data => data.json())
            .then(res => setDetails(res.vans))
            .catch(error => console.error(error))
    }, [id])

    return (
        <section className="host-van-details">
            <Link to='/host/vans'>
                <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                <p>Back to all vans</p>
            </Link>
            <div className="details-container">
                <div className="overview">
                    <img src={details.imageUrl} alt="" />
                    <div className="text">
                        <p className={typeClassName}>{details.type}</p>
                        <h3 className="name">{details.name}</h3>
                        <p className="price">${details.price}<span>/day</span></p>
                    </div>
                </div>
                <div className="navigation">
                    <NavLink to={`/host/vans/${id}`}>
                        Details
                    </NavLink>
                    <NavLink to={`/host/vans/${id}/pricing`}>
                        Pricing
                    </NavLink>
                    <NavLink to={`/host/vans/${id}/photos`}>
                        Photos
                    </NavLink>
                </div>
                <div className="van-details">
                    <p><b>Name: </b>{details.name}</p>
                    <p><b>Category: </b>{details.type}</p>
                    <p><b>Description: </b>{details.description}</p>
                    <p><b>Visibility: </b>Public</p>
                </div>
            </div>
        </section>
    )
}
