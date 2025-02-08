import { NavLink } from "react-router-dom"
import './HostHeader.css'

export default function HostHeader() {
    return (
        <nav className="host-navbar">
            <NavLink to='.' end>Dashboard</NavLink>
            <NavLink to='income'>Income</NavLink>
            <NavLink to='vans'>Vans</NavLink>
            <NavLink to='reviews'>Reviews</NavLink>
        </nav>
    )
}
