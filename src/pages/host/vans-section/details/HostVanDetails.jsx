import { useOutletContext } from 'react-router-dom'
import propTypes from 'prop-types'
import './HostVanDetails.css'

export default function HostVanDetails() {
    const details = useOutletContext()
    return (
        <section className="host-van-details">    
            <div className="details-container">
                <div className="van-details">
                    <p><b>Name: </b>{details.name}</p>
                    <p><b>Category: </b>{details.type}</p>
                    <p><b>Description: </b>{details.description}</p>
                    <p><b>Visibility: </b>Public</p>
                </div>       
            </div>
        </section>
    )
}

HostVanDetails.propTypes = {
    details: propTypes.object
}