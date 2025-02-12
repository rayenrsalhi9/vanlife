import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [login, setLogin] = useState({email: '', password: ''})

    const handleChange = (e) => {
        const { name, value } = e.target
        setLogin(prevLogin => ({...prevLogin, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Your data: ${login.email} | ${login.password}`)
        setLogin({email: '', password: ''})
    }

    return (
        <div className='login'>
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    name='email'
                    type='email' 
                    placeholder='Email address' 
                    aria-label='email'
                    value={login.email} 
                    onChange={handleChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Passwword'
                    aria-label='password'
                    value={login.password}
                    onChange={handleChange}
                />
                <button>Sign in</button>
            </form>
            <p>Don’t have an account? <span>Create one now</span></p>
        </div>
    )
}
