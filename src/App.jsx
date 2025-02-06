import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Vans from './pages/vans/Vans.jsx'
import VanDetails from './pages/van-details/VanDetails.jsx'
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <header>
                <Link className='logo' to='/'>#VANLIFE</Link><br /> 
                <nav>
                    <Link to='/about'>About</Link><br />
                    <Link to='/vans'>Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/vans' element={<Vans />} />
                <Route path='/vans/:id' element={<VanDetails />} />
            </Routes>
            <footer>
                ©️ 2025 #VANLIFE
            </footer>
        </BrowserRouter>
    )
}

export default App