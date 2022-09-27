import { logInWithEmailAndPassword, auth, logout } from '../../firebase'
import { useState, useEffect } from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)

    const [ user, loading, error ] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(auth.currentUser);
    }, [auth.currentUser])

    if(!auth.currentUser) {        
        return (
            <form>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => {
                e.preventDefault()
                logInWithEmailAndPassword(email, password)
                console.log(auth.currentUser);
            }}>Login</button>
        </form>
        )
    }

    return <button onClick={() => logout()}>Logout</button>

}

export default Login