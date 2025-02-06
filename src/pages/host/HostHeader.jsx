import { Link } from "react-router-dom"

export default function HostHeader() {
    return (
        <nav className="host-navbar">
            <Link to='/host'>Dashboard</Link>
            <Link to='/host/income'>Income</Link>
            <Link to='/host/vans'>Vans</Link>
            <Link to='/host/reviews'>Reviews</Link>
        </nav>
    )
}
