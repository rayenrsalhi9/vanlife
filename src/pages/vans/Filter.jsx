import { NavLink, Link } from 'react-router-dom'
import propTypes from 'prop-types'
import clsx from 'clsx'
import './Filter.css'

const Filter = ({filterType, searchParams}) => {

    const generateSearchParam = (key, value) => {
        const sp = new URLSearchParams(searchParams)
        value === null ? sp.delete(key) : sp.set(key, value)
        return `?${sp.toString()}`
    }

    return (
        <div className="filter-bar">
            <h1>Explore our van options</h1>
            <div className="filters-container">
                <div className="filters">
                    <NavLink to={generateSearchParam('type', 'simple')} className={clsx({'simple': true, 'selected': filterType === 'simple'})}>simple</NavLink>
                    <NavLink to={generateSearchParam('type', 'rugged')} className={clsx({'rugged': true, 'selected': filterType === 'rugged'})}>rugged</NavLink>
                    <NavLink to={generateSearchParam('type', 'luxury')} className={clsx({'luxury': true, 'selected': filterType === 'luxury'})}>luxury</NavLink>
                </div>
                <Link to='.' className='clear-filter-option'>clear filters</Link>
            </div>
        </div>
    )
}

Filter.propTypes = {
    filterType: propTypes.string,
    searchParams: propTypes.object
}

export default Filter