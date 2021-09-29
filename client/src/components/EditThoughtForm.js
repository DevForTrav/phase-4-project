import React, {useState } from "react";

const EditThoughtForm = (props) => {


    const [title, setTitle] = useState(props.title)
    const [thoughtDescription, setThoughtDescription] = useState(props.description)
    // const [userId, setUserId] = useState('')
    const [occurences, setOccurences] = useState(props.occurence)
    const [ renderEditThoughtForm, setRenderEditThoughtForm] = useState(false)

    const updateThought = () => {
        fetch(`/thoughts/${props.thoughtId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                title,
                description: thoughtDescription,
                occurences,
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then((thought) => {
                    // props.addedThought(!props.addedThoughtValue)
                    // props.userThoughtForm(false)
                    props.didEditThought(!props.didEditThoughtValue)
                    setRenderEditThoughtForm(false)
                })
            } else {
                console.log(res.json())
            }

        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        updateThought()
    }

    const clickEditThought = () => {
        setRenderEditThoughtForm(!renderEditThoughtForm)
    }

    return(
        <div>
            <button onClick={clickEditThought}>Edit Thought</button>
            {renderEditThoughtForm ? 
                <>
                    <p> Edit Thought</p>
                    <form onSubmit={ handleSubmit }>
                        <label>
                            Title:
                            <input 
                                defaultValue={props.title}
                                name="title" 
                                type="text"
                                onChange={ (e) => {setTitle(e.target.value)}}
                            >
                            </input>
                        </label>
                        <label>
                            Description:
                            <input 
                                defaultValue={props.description}
                                name="description" 
                                type="textarea"
                                onChange={ (e) => {setThoughtDescription(e.target.value)}}
                            >
                            </input>
                        </label>
                        <label>
                            Occurrences:
                            <input
                                defaultValue={props.occurences} 
                                name="occurrences" 
                                type="integer"
                                onChange={ (e) => {setOccurences(e.target.value)}}
                            >
                            </input>
                        </label>
                        <input type="submit" value="Create" ></input>
                    </form>
                </> 
                : 
                null
            }
            
        </div>
    )

}

export default EditThoughtForm