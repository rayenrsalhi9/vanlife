import { useState } from 'react'
import { loginUser } from '../../api'
import { useLoaderData } from 'react-router-dom'
import './Login.css'

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export default function Login() {
    const loaderMessage = useLoaderData()

    const [login, setLogin] = useState({email: '', password: ''})
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setLogin(prevLogin => ({...prevLogin, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setStatus('submitting')
        setError(null)

        loginUser(login)
            .then(res => console.log(res))
            .catch(err => setError(err.message))
            .finally(() => {
                setLogin({email: '', password: ''})
                setStatus('idle')
            }) 
    }

    return (
        <div className='login'>

            {loaderMessage ? <h3 className="loader-message">{loaderMessage}</h3> : null }

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
                    placeholder='Password'
                    aria-label='password'
                    value={login.password}
                    onChange={handleChange}
                />
                <button 
                    disabled={status === 'submitting'}
                >
                    {
                        status === 'submitting' ?
                        'Please wait' :
                        'Sign in'
                    }
                </button>
            </form>

            <p>Don’t have an account? <span>Create one now</span></p>

            { error ? <h4 className='form-error-msg'>{error}</h4> : null }

        </div>
    )
}
