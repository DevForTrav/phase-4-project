import React, { useState }  from 'react';


const LoginForm = ({ loggedIn }) => {
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then((res) => {
            if (res.ok) {
                res.json().then( () => {loggedIn(true)})
            } else {
                res.json().then( (r) => {
                    console.log(r)
                    setError(r.errors)
                    loggedIn(false)
                })
            }
        })
       
    }

    return (
        <>
            <p>Login Page</p>
            <form onSubmit={ handleSubmit }>
                <label>
                    Username:
                    <input 
                        name="username" 
                        type="text"
                        onChange={ (e) => {setUsername(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Password:
                    <input 
                        name="password" 
                        type="password"
                        onChange={ (e) => {setPassword(e.target.value)}}
                    >
                    </input>
                </label>
                <input type="submit" value="Login" ></input>
            </form>
            <p>{error}</p> 
        </>
    )
    
}

export default LoginForm