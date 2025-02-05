import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'

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
            </Routes>
            <footer>
                ©️ 2025 #VANLIFE
            </footer>
        </BrowserRouter>
    )
}

export default App