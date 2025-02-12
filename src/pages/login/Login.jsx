
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <h1>Sign in to your account</h1>
            <form>
                <input 
                    name='email'
                    type='email' 
                    placeholder='Email address' 
                    aria-label='email' 
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Passwword'
                    aria-label='password'
                />
                <button>Sign in</button>
            </form>
            <p>Don’t have an account? <span>Create one now</span></p>
        </div>
    )
}
