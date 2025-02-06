import { NavLink } from "react-router-dom"
import propTypes from 'prop-types'
import './VansNav.css'

export default function VansNav({id}) {
    return (
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
    )
}

VansNav.propTypes = {
    id: propTypes.string
}