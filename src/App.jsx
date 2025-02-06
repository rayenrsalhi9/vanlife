import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Vans from './pages/vans/Vans.jsx'
import VanDetails from './pages/van-details/VanDetails.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './pages/host/HostLayout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetails from './pages/host/HostVanDetails.jsx'
import Reviews from './pages/host/Reviews.jsx'
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                
                    <Route index element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetails />} />

                    <Route  path='host' element={<HostLayout />}>    
                        <Route index element={<Dashboard />}/>
                        <Route path='income' element={<Income />}/>
                        <Route path='vans' element={<HostVans />}/>
                        <Route path='vans/:id' element={<HostVanDetails />}/>
                        <Route path='reviews' element={<Reviews />}/>
                    </Route>
                </Route>      
            </Routes>
        </BrowserRouter>
    )
}

export default App