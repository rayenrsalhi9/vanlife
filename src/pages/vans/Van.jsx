import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Van.css'

export default function Van({ van, vanClassName,searchParams, filterType }) {
    return (
        <section className="van">
            <Link to={van.id} state={{search: searchParams, type: filterType}}>
                <img src={van.imageUrl} alt="van image" loading='lazy'/>
                <div className="text">
                    <h3>{van.name}</h3>
                    <div className="price">
                        <p>${van.price}</p>
                        <span>/day</span>
                    </div>
                </div>
                <div className='type'>
                    <span className={vanClassName}>{van.type}</span>
                </div>
            </Link>
        </section>
    )
}

Van.propTypes = {
    van: PropTypes.object,
    vanClassName: PropTypes.string,
    searchParams: PropTypes.string,
    filterType: PropTypes.string
}
