import VansNav from "./vans-navigation/VansNav"
import { Link, Outlet } from "react-router-dom"
import leftArrow from '../../../assets/left-arrow.svg'
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import clsx from "clsx"
import './VansLayout.css'

export default function VansLayout() {
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
        <section className="vans-layout">
            <Link to='..' relative="path">
                <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                <p>Back to all vans</p>
            </Link>
            <div className="overview">
                <img src={details.imageUrl} alt="" />
                <div className="text">
                    <p className={typeClassName}>{details.type}</p>
                    <h3 className="name">{details.name}</h3>
                    <p className="price">${details.price}<span>/day</span></p>
                </div>
            </div>
            <VansNav/>
            {details && <Outlet context={details} />}
        </section>
    )
}
