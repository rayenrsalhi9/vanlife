import { NavLink } from "react-router-dom"
import './HostHeader.css'

export default function HostHeader() {
    return (
        <nav className="host-navbar">
            <NavLink to='/host' end>Dashboard</NavLink>
            <NavLink to='/host/income'>Income</NavLink>
            <NavLink to='/host/vans'>Vans</NavLink>
            <NavLink to='/host/reviews'>Reviews</NavLink>
        </nav>
    )
}
