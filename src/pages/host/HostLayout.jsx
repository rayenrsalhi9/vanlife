/* eslint-disable react-refresh/only-export-components */
import HostHeader from "./header/HostHeader"
import { Outlet } from "react-router-dom"
import { requireAuth } from "../../utils"
import './Host.css'

export async function loader({request}) {
    await requireAuth(request)
    return null
}

export default function HostLayout() {
    return (
        <section className="host">
            <HostHeader />
            <Outlet />
        </section>
    )
}
