import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
    return (
        <section className="about">
            <img 
            src='https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BgsY7AiU0IQYanNPXxpLYeAPNVHXaiILif3nWen5w8trCWahe7eMuALdtJYN6DAOM79pF39zM9Galo0PwhtlR4IkXKBfWW9wOMBvpjLt6-Z3n~wDKUxoizy-idd24gU4naj17Gg-zK2f7vcL-sFtISwk99P0JYgzelsZduDHDl1h6PkC3auJkAy7CsCbYwmpWTmgmxg~rhBuYRazCD8~hL3qh4SeptDQ4GEVGxiznqT7G0Td0F-leYjca6vm5MKmG6ocsWnDe4Uq~s2lJWj2BrxWZndY-PkxWkFJ16UPIGIqkmshF4rXiEEHlOddXnjI8zOY6GI~6pTYGvvw~C8cUg__' alt="about section image" />
            <div className="text">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br /> 
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="navigation-box">
                    <h3>Your destination is waiting. <br />Your van is ready.</h3>
                    <Link to='/vans'>Explore our vans</Link>
                </div>
            </div>
        </section>
    )
}
