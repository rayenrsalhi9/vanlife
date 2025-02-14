/* eslint-disable react-refresh/only-export-components */
import VansNav from "./vans-navigation/VansNav"
import { Link, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import { requireAuth } from "../../../utils"
import { getVanDetails } from "../../../api"
import leftArrow from '../../../assets/left-arrow.svg'
import clsx from "clsx"
import './VansLayout.css'

export async function hostVanDetailsLoader({ params, request }) {
    await requireAuth(request)
    return defer({vanDetails: getVanDetails(params.id)})
}

export default function VansLayout() {
    const detailsPromiseObj = useLoaderData()

    return (
        <section className="vans-layout">
            <Suspense fallback={<h1 className="loading-message"></h1>}>
                <Await resolve={detailsPromiseObj.vanDetails}>
                        {details => (
                            <>
                                <Link to='..' relative="path">
                                    <img src={leftArrow} alt="left arrow image" className='left-arrow' />
                                    <p>Back to all vans</p>
                                </Link>
                                <div className="overview">
                                    <img src={details.imageUrl} alt="van image" />
                                    <div className="text">
                                        <p className={clsx({
                                                'type': true,
                                                'simple': details && details.type === 'simple',
                                                'rugged': details && details.type === 'rugged',
                                                'luxury': details && details.type === 'luxury'
                                            })}
                                        >
                                            {details.type}
                                        </p>
                                        <h3 className="name">{details.name}</h3>
                                        <p className="price">${details.price}<span>/day</span></p>
                                    </div>
                                </div>
                                <VansNav/>
                                {details && <Outlet context={details} />}
                            </>
                        )}
                </Await>
            </Suspense>
        </section>
    )
}
