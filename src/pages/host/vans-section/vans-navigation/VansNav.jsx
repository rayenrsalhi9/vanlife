import { NavLink } from "react-router-dom"
import propTypes from 'prop-types'
import './VansNav.css'

export default function VansNav() {
    return (
        <div className="navigation">
            <NavLink end to='.'>
                Details
            </NavLink>
            <NavLink to='pricing'>
                Pricing
            </NavLink>
            <NavLink to='photos'>
                Photos
            </NavLink>
        </div>
    )
}

VansNav.propTypes = {
    id: propTypes.string
}