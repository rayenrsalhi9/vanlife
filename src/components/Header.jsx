import { NavLink, Link } from 'react-router-dom'
import accountIcon from '../assets/account-icon.svg'

export default function Header() {
    return (
        <header>
            <NavLink className='logo' to=''>#VANLIFE</NavLink>
            <nav>
                <NavLink to='host'>Host</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='vans'>Vans</NavLink>
                <Link to='login' className='account-icon'>
                    <img src={accountIcon} alt="account icon" />
                </Link>
            </nav>
        </header>
    )
}
