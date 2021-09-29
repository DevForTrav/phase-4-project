import React, { useState, useEffect } from "react";
import ThoughtForm from "./ThoughtForm";
import UserThoughts from "./UserThoughts";

const UserPage = ({ loggedIn }) => {

    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [hasThoughts, setHasThoughts] = useState(false)
    const [renderThoughtForm, setRenderThoughtForm] = useState(false)
    const [addedThought, setAddedThought] = useState(false)

    useEffect(() => {
        fetch("/me").then( (res) => {
          if (res.ok) {
            res.json().then((user) => {
                setUserId(user.id)
                setUsername(user.username)
                setFirstName(user.first_name)
                loggedIn(true)

                if (user.thoughts.length === 0) {
                    setHasThoughts(false)
                } else {
                    setHasThoughts(true)
                }
            })
          } else {
              loggedIn(false)
          }
        })
      },[loggedIn, addedThought, hasThoughts])

      const handleClick = () => {
        setRenderThoughtForm(!renderThoughtForm)
      }
    return (
        <div>
            <h1>Hello { firstName ? firstName : username }</h1>
            { !hasThoughts ? 
                <p>It looks like you haven't added any of your thoughts. Would you like to <u onClick={handleClick}>add some?</u></p> 
                : 
                <UserThoughts 
                  didAddThought={setAddedThought} 
                  addedThoughtValue={addedThought} 
                  addedThought={setAddedThought} 
                  userId={userId}  
                  userThoughtForm={ setRenderThoughtForm }  
                  renderThoughtForm={renderThoughtForm}  
                  hasThoughts={setHasThoughts} 
                /> 
            }
            { renderThoughtForm ?   
                <ThoughtForm 
                  userId={userId} 
                  addedThought={setAddedThought} 
                  addedThoughtValue={addedThought} 
                  userThoughtForm={ setRenderThoughtForm } 
                /> 
                : 
                null
            }
        </div>
    )
}

export default UserPage