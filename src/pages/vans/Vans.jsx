import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Filter from './Filter'
import Van from './Van'
import clsx from 'clsx'
import './Vans.css'
import '../../server'
import getVans from '../../vansApi'

export default function Vans() {

    const [loading, setLoading] = useState(false)

    // filtering vans
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams(); // type: object
    const filterType = searchParams.get('type')
    
    // displaying vans
    const [vans, setVans] = useState([])

    useEffect(() => {
        async function loadVans () {
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }
        loadVans()
    }, [])

    const vansElements = vans.map(el => {
        const vanClassName = clsx({
            'simple': el.type === 'simple',
            'rugged': el.type === 'rugged',
            'luxury': el.type === 'luxury'
        })
        return(
            !filterType ? <Van key={el.id} van={el} vanClassName={vanClassName}/> :
            el.type === filterType && 
                <Van 
                    key={el.id} 
                    van={el} 
                    vanClassName={vanClassName} 
                    searchParams={searchParams.toString()}
                    filterType={filterType}
                />
        )
    })

    if (loading) return <h1 className='loading-message'>Loading...</h1>
    
    return (
        <section className='vans-container'>
            <Filter filterType={filterType} searchParams={searchParams} />
            <div className="vans">
                {vansElements}
            </div>
        </section>
    )
}
