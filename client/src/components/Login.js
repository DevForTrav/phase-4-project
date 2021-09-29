import { useState } from "react"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"





const Login = ({ loggedIn }) => {
    const [ showSignup, setShowSignup ] = useState(false)

    return (
        <>
            
            { showSignup ? ( 
                <div>
                    <p>Alreaedy have an account?
                        <button onClick={ ()=> setShowSignup(false) }>Login</button>
                    </p>
                    <SignupForm loggedIn={loggedIn} />
                </div>
            ) : (
                <div>
                    <button onClick={ ()=> setShowSignup(true) }>Signup</button>
                    <LoginForm loggedIn={loggedIn} />
                </div>
            )}
        </>
    )

}

export default Login