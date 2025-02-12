import { useSearchParams, useLoaderData } from 'react-router-dom'
import Filter from './Filter'
import Van from './Van'
import clsx from 'clsx'
import '../../server'
import getVans from '../../vansApi'
import './Vans.css'

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
    return getVans()
}

export default function Vans() {
    const vansData = useLoaderData()

    const [searchParams] = useSearchParams();
    const filterType = searchParams.get('type')

    const vansElements = vansData.map(el => {
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
