import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className='logo' to='/'>#VANLIFE</Link><br /> 
            <nav>
                <Link to='/about'>About</Link><br />
                <Link to='/vans'>Vans</Link>
            </nav>
        </header>
    )
}
