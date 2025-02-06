import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function HostVan({van}) {
    return (
        <Link to={`${van.id}`}>
            <div className="van-container">
                <img src={van.imageUrl} alt="van host image" />
                <div className="text">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </div>
        </Link>
    )
}

HostVan.propTypes = {
    van: propTypes.object
}