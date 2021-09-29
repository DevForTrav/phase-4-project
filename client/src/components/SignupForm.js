import React, { useState }  from 'react';


const SignupForm = ({ loggedIn }) => {

    const [ username, setUsername] = useState("")
    const [ firstName, setFirstName] = useState("")
    const [ lastName, setLastName] = useState("")
    const [ age, setAge] = useState("")
    const [ avatarImage, setAvatarImage] = useState("")
    const [ password, setPassword] = useState("")
    const [ passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                username, 
                first_name: firstName, 
                last_name: lastName, 
                age, 
                avatar_image: avatarImage, 
                password, 
                password_confirmation: passwordConfirmation 
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then( () => {loggedIn(true)})
            } else {
                loggedIn(false)
            }
        })
       
    }

    return (
        <>
            <p>Signup Page</p>
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
                    First Name:
                    <input 
                        name="first_name" 
                        type="text"
                        onChange={ (e) => {setFirstName(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Last Name:
                    <input 
                        name="last_name" 
                        type="text"
                        onChange={ (e) => {setLastName(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Age:
                    <input 
                        name="age" 
                        type="text"
                        onChange={ (e) => {setAge(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Avatar Image Url:
                    <input 
                        name="avatar_image" 
                        type="text"
                        onChange={ (e) => {setAvatarImage(e.target.value)}}
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
                <label>
                    Password Confirmation:
                    <input 
                        name="password" 
                        type="password"
                        onChange={ (e) => {setPasswordConfirmation(e.target.value)}}
                    >
                    </input>
                </label>
                <input type="submit" value="Signup" ></input>
            </form>
        </>

    )
    
}

export default SignupForm