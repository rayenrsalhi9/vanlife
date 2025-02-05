import './VanDetails.css'

export default function VanDetails() {
    return (
        <section className="details">
            <img src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png" alt="van details image" className='details-img'/>
            <div className="text">
                <p className='type simple'>simple</p>
                <h1>Modest Explorer</h1>
                <div className="price">
                    <p>$60</p>
                    <span>/day</span>
                </div>
                <p>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            </div>
            <button className="rent-button">Rent this van</button>
        </section>
    )
}
