import PropTypes from 'prop-types'

export default function Van({ van, vanClassName }) {
    return (
        <section className="van">
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
        </section>
    )
}

Van.propTypes = {
    van: PropTypes.object,
    vanClassName: PropTypes.string
}
