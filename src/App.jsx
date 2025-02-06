import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Vans from './pages/vans/Vans.jsx'
import VanDetails from './pages/van-details/VanDetails.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './pages/host/HostLayout.jsx'
import Dashboard from './pages/host/dashboard/Dashboard.jsx'
import Income from './pages/host/income-section/Income.jsx'
import HostVans from './pages/host/vans-section/HostVans.jsx'
import HostVanDetails from './pages/host/vans-section/details/HostVanDetails.jsx'
import Reviews from './pages/host/review-section/Reviews.jsx'
import './App.css'
import VansLayout from './pages/host/vans-section/VansLayout.jsx'
import Pricing from './pages/host/vans-section/pricing/Pricing.jsx'
import Photos from './pages/host/vans-section/photos/Photos.jsx'

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
                        <Route path='vans/:id' element={<VansLayout />}>
                            <Route index element={<HostVanDetails />}/>
                            <Route path='pricing' element={<Pricing />}/>
                            <Route path='photos' element={<Photos />}/>
                        </Route>
                        <Route path='reviews' element={<Reviews />}/>
                    </Route>
                </Route>      
            </Routes>
        </BrowserRouter>
    )
}

export default App