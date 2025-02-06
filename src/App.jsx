import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Vans from './pages/vans/Vans.jsx'
import VanDetails from './pages/van-details/VanDetails.jsx'
import Layout from './components/Layout.jsx'
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/vans' element={<Vans />} />
                    <Route path='/vans/:id' element={<VanDetails />} />
                </Route>      
            </Routes>
        </BrowserRouter>
    )
}

export default App