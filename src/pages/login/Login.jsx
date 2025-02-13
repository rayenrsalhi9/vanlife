import { useState } from 'react'
import { loginUser } from '../../api'
import { useLoaderData, Form, redirect } from 'react-router-dom'
import './Login.css'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        await loginUser({email, password})
        localStorage.setItem('isLoggedIn', true)
        return window.location.href = '/host'
    } catch(err) {
        console.log('error here: ', err)
    }
    return null
}

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export default function Login() {
    const loaderMessage = useLoaderData()

    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    return (
        <div className='login'>

            {loaderMessage ? <h3 className="loader-message">{loaderMessage}</h3> : null }

            <h1>Sign in to your account</h1>

            <Form method='post'>
                <input 
                    name='email'
                    type='email' 
                    placeholder='Email address' 
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
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
            </Form>

            <p>Don’t have an account? <span>Create one now</span></p>

            { error ? <h4 className='form-error-msg'>{error}</h4> : null }

        </div>
    )
}
