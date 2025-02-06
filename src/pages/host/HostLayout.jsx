import HostHeader from "./HostHeader"
import { Outlet } from "react-router-dom"
import './Host.css'

export default function HostLayout() {
    return (
        <section className="host">
            <HostHeader />
            <Outlet />
        </section>
    )
}
