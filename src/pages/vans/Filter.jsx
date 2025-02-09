import { NavLink, Link } from 'react-router-dom'
import propTypes from 'prop-types'
import clsx from 'clsx'
import './Filter.css'

const Filter = ({filterType}) => {
    return (
        <div className="filter-bar">
            <h1>Explore our van options</h1>
            <div className="filters-container">
                <div className="filters">
                    <NavLink to='?type=simple' className={clsx({'simple': true, 'selected': filterType === 'simple'})}>simple</NavLink>
                    <NavLink to='?type=rugged' className={clsx({'rugged': true, 'selected': filterType === 'rugged'})}>rugged</NavLink>
                    <NavLink to='?type=luxury' className={clsx({'luxury': true, 'selected': filterType === 'luxury'})}>luxury</NavLink>
                </div>
                <Link to='.' className='clear-filter-option'>clear filters</Link>
            </div>
        </div>
    )
}

Filter.propTypes = {
    filterType: propTypes.string
}

export default Filter