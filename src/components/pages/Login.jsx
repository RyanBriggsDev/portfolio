import { logInWithEmailAndPassword, auth, logout } from '../../firebase'
import { useState, useEffect } from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import Header from '../layout/Header'

function Login() {

    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)

    const [ user, loading, error ] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
    }, [auth.currentUser])

    if(!auth.currentUser) {
        return (
            <div className="content-grid">
                    <Header 
                        headerText={`Login`} 
                        headerDesc="So you can do stuff."
                        btnText={`Or don't`}
                        to='/'
                />
                <form className='flex-dir-col'>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                    <button
                        className='btn' 
                        onClick={(e) => {
                            e.preventDefault()
                            logInWithEmailAndPassword(email, password)
                        }}>Login
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className='flex-dir-col'>
            <button className='btn' onClick={() => logout()}>Logout</button>
            <button className='btn' onClick={() => navigate('/create-post')}>Create a Post</button>
        </div>
    )

}

export default Login