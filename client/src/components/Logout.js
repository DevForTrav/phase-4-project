import React from "react"
import '../App.css'


const Logout = ({ loggedIn }) => {

    const handleClick = () => {
        fetch("/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.ok) {
                console.log(res)
                loggedIn(false)
                return res.ok
            } else {
                console.log("Logout Unsucessful")
            }   
        }
        )
    }

    return (

        <button className="logout-button" onClick={handleClick}>
            Logout
        </button>
    )
}

export default Logout