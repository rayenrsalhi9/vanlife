import VansNav from "./vans-navigation/VansNav"
import { Link, Outlet, useLoaderData } from "react-router-dom"
import { requireAuth } from "../../../utils"
import leftArrow from '../../../assets/left-arrow.svg'
import clsx from "clsx"
import './VansLayout.css'

export async function loader({request}) {
    console.log(new URL(request.url))
    await requireAuth()
    return null
}

export default function VansLayout() {
    const details = useLoaderData()

    const typeClassName = clsx({
        'type': true,
        'simple': details && details.type === 'simple',
        'rugged': details && details.type === 'rugged',
        'luxury': details && details.type === 'luxury'
    })

    return (
        <section className="vans-layout">
            <Link to='..' relative="path">
                <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                <p>Back to all vans</p>
            </Link>
            <div className="overview">
                <img src={details.imageUrl} alt="van image" />
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
