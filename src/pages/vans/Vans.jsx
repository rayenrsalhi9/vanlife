import { Suspense } from 'react'
import { useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'
import Filter from './Filter'
import Van from './Van'
import clsx from 'clsx'
import { getVans } from '../../api'
import './Vans.css'

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
    return defer({vans: getVans()})
}

export default function Vans() {
    const vansPromiseObject = useLoaderData() // the object in the loader fct above

    const [searchParams] = useSearchParams();
    const filterType = searchParams.get('type')
    
    return (
        <section className='vans-container'>

            <Filter filterType={filterType} searchParams={searchParams} />

            <div className="vans">
                <Suspense 
                    fallback={<h1 className='loading-message'></h1>}
                >
                    <Await resolve={vansPromiseObject.vans}>
                        {loadedVans => loadedVans.map(el => {
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
                        })}
                    </Await>
                </Suspense>
            </div>

        </section>
    )
}
