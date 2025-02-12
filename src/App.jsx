import { 
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements 
} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Vans, {loader as vansLoader} from './pages/vans/Vans.jsx'
import VanDetails, {vanDetailsLoader as detailsLoader} from './pages/van-details/VanDetails.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './pages/host/HostLayout.jsx'
import Dashboard from './pages/host/dashboard/Dashboard.jsx'
import Income from './pages/host/income-section/Income.jsx'
import HostVans, { hostVansLoader } from './pages/host/vans-section/HostVans.jsx'
import HostVanDetails, { hostVanDetailsLoader } from './pages/host/vans-section/details/HostVanDetails.jsx'
import Reviews from './pages/host/review-section/Reviews.jsx'
import './App.css'
import VansLayout from './pages/host/vans-section/VansLayout.jsx'
import Pricing from './pages/host/vans-section/pricing/Pricing.jsx'
import Photos from './pages/host/vans-section/photos/Photos.jsx'
import NotFound from './components/NotFound.jsx'
import ErrorMsg from './components/ErrorMsg.jsx'
import Login from './pages/login/Login.jsx'
import { requireAuth } from './utils.js'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route 
            path='vans' 
            element={<Vans />} 
            loader={vansLoader} 
            errorElement={<ErrorMsg />}
        />
        <Route 
            path='vans/:id' 
            element={<VanDetails />} 
            loader={detailsLoader}
        />

        <Route path='host' element={<HostLayout />}>  
            <Route 
                index 
                element={<Dashboard />} 
                loader={async () => await requireAuth()}
            />
            <Route 
                path='income' 
                element={<Income />}
                loader={async () => await requireAuth()}
            />
            <Route 
                path='vans' 
                element={<HostVans />} 
                loader={hostVansLoader} 
                errorElement={<ErrorMsg />}
            />
            <Route path='vans/:id' element={<VansLayout />} loader={hostVanDetailsLoader}>
                <Route 
                    index 
                    element={<HostVanDetails />}
                    loader={hostVanDetailsLoader}
                />
                <Route 
                    path='pricing' 
                    element={<Pricing />} 
                    loader={async () => await requireAuth()}
                />
                <Route path='photos' element={<Photos />}/>
            </Route>
            <Route 
                path='reviews' 
                element={<Reviews />}
                loader={async () => await requireAuth()}
            />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
    </Route>
))

const App = () => {
    return(
        <RouterProvider  router={router} />
    )
}

export default App