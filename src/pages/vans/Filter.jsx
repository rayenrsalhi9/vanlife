import { NavLink, Link } from 'react-router-dom'
import './Filter.css'

const Filter = () => {
    return (
        <div className="filter-bar">
            <h1>Explore our van options</h1>
            <div className="filters-container">
                <div className="filters">
                    <NavLink to='?type=simple' className='simple'>simple</NavLink>
                    <NavLink to='?type=rugged' className='rugged'>rugged</NavLink>
                    <NavLink to='?type=luxury' className='luxury'>luxury</NavLink>
                </div>
                <Link to='.' className='clear-filter-option'>clear filters</Link>
            </div>
        </div>
    )
}

export default Filter