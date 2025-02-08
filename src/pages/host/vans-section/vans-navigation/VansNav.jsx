import { NavLink } from "react-router-dom"
import propTypes from 'prop-types'
import './VansNav.css'

export default function VansNav() {
    return (
        <div className="navigation">
            <NavLink end to={'.'} relative="path">
                Details
            </NavLink>
            <NavLink to={'pricing'} relative="path">
                Pricing
            </NavLink>
            <NavLink to={'photos'} relative="path">
                Photos
            </NavLink>
        </div>
    )
}

VansNav.propTypes = {
    id: propTypes.string
}