/* eslint-disable react-refresh/only-export-components */
import { loginUser } from '../../api'
import { useLoaderData, Form, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Login.css'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        await loginUser({email, password})
        localStorage.setItem('isLoggedIn', true)
    } catch(err) {
        console.log('error here: ', err)
        return err
    }
    return null
}

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export default function Login() {
    const loaderMessage = useLoaderData()

    const shouldRedirect = localStorage.getItem('isLoggedIn') || false;

    const navigate = useNavigate();

    useEffect(() => {
        if (shouldRedirect) {
        navigate('/host');
        }
    });

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
                <button>Sign in</button>
            </Form>
            <p>Don’t have an account? <span>Create one now</span></p>
        </div>
    )
}
