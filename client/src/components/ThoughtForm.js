import React, {useState } from "react";

const ThoughtForm = (props) => {


    const [title, setTitle] = useState('')
    const [thoughtDescription, setThoughtDescription] = useState('')
    // const [userId, setUserId] = useState('')
    const [occurences, setOccurences] = useState(0)

    const createNewThought = () => {
        fetch("/thoughts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                title,
                description: thoughtDescription,
                occurences,
                user_id: props.userId,
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then((thought) => {
                    props.addedThought(!props.addedThoughtValue)
                    props.userThoughtForm(false)
                })
            } else {
                console.log(res.json())
            }

        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createNewThought()
        
    }

    return(
        <div>
            <p> New Thought</p>
            <form onSubmit={ handleSubmit }>
                <label>
                    Title:
                    <input 
                        name="title" 
                        type="text"
                        onChange={ (e) => {setTitle(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Description:
                    <input 
                        name="description" 
                        type="textarea"
                        onChange={ (e) => {setThoughtDescription(e.target.value)}}
                    >
                    </input>
                </label>
                <label>
                    Occurrences:
                    <input 
                        name="occurences" 
                        type="integer"
                        onChange={ (e) => {setOccurences(e.target.value)}}
                    >
                    </input>
                </label>
                <input type="submit" value="Create" ></input>
            </form>
        </div>
    )

}

export default ThoughtForm