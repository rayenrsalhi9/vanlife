import { useOutletContext } from "react-router-dom"
import './Pricing.css'

export default function Pricing() {
    const price = useOutletContext().price
    return (
        <section className="pricing">
            <h2>${price} <span>/day</span> </h2>
        </section>
    )
}
