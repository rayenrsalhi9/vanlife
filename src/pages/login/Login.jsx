/* eslint-disable react-refresh/only-export-components */
import { loginUser } from '../../api'
import { 
    useLoaderData, 
    Form, 
    redirect, 
    useActionData,
    useNavigation } 
from 'react-router-dom'
import './Login.css'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        await loginUser({email, password})
        localStorage.setItem('isLoggedIn', true)
        return redirect('/host')
    } catch(err) {
        return err.message
    }
}

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export default function Login() {
    const loaderMessage = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()

    return (
        <div className='login'>
            {loaderMessage ? <h3 className="loader-message">{loaderMessage}</h3> : null }
            <h1>Sign in to your account</h1>
            <Form method='post' replace>
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
                <button disabled={navigation.state !== 'idle'}>
                    {navigation.state !== 'idle' ? 'Signing in...' : 'Sign in'}
                </button>
            </Form>
            <p>Don’t have an account? <span>Create one now</span></p>
            {error && <h3 className='form-error-msg'>{error}</h3>}
        </div>
    )
}
