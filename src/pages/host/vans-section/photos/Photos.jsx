import { useOutletContext } from "react-router-dom"
import './Photos.css'

export default function Photos() {
    const vanDetails = useOutletContext()

    return (
        <section className="photos">
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
            <img src={vanDetails.imageUrl} alt="van image" />
        </section>
    )
}
