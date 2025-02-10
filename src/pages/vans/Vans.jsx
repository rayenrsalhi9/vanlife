import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Filter from './Filter'
import Van from './Van'
import clsx from 'clsx'
import './Vans.css'
import '../../server'

export default function Vans() {

    // filtering vans
    const [searchParams, setSearchParams] = useSearchParams(); // type: object
    const filterType = searchParams.get('type')
    
    // displaying vans
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(data => data.json())
            .then(res => setVans(res.vans))
            .catch(error => console.error("Error fetching vans:", error));
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
    
    return (
        <section className='vans-container'>
            <Filter filterType={filterType} searchParams={searchParams} />
            <div className="vans">
                {vansElements}
            </div>
        </section>
    )
}
