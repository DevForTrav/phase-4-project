import React, { useEffect, useState} from "react";
import EditThoughtForm from "./EditThoughtForm";
import SolutionForm from "./SolutionForm";
import ThoughtDeleteButton from "./ThoughtDeleteButton";

const UserThoughts = ( props ) => {

    const [thoughts, setThoughts] = useState([])
    const [didDeleteThought, setDidDeleteThought] = useState([])
    const [didEditThought, setDidEditThought] = useState(false)

    

    useEffect(() => {
        fetch(`/users/${props.userId}/thoughts`).then((res) => {
            if (res.ok) {
                res.json().then((thoughts) => {
                    setThoughts(thoughts)
                    setDidDeleteThought(false)
                    props.addedThought(false)
                    if (thoughts.length === 0) {
                        props.hasThoughts(false)
                    }
                })
            } else {
                console.log(res)
            }
        })
    }, [props, didDeleteThought, didEditThought])


    
    const clickAddThought = () => {
        props.userThoughtForm(!props.renderThoughtForm)
    }

    const renderThoughtList = () => {
       return thoughts.map( thought => {
           return(
            <div key={thought.id}>
                <h3 >{thought.title}</h3>
                <p>{thought.description}</p>
                <EditThoughtForm  didEditThought={setDidEditThought} didEditThoughtValue={didEditThought} title={thought.title} description={thought.description} occurences={thought.occurences} thoughtId={thought.id} />
                <SolutionForm thoughtId={thought.id} />
                <ThoughtDeleteButton thoughtId={thought.id} userId={thought.user_id} didDeleteThought={setDidDeleteThought} />
                {/* { renderSolutionForm ? true : null} */}
            </div>
           )
        })
    }
    return (
        <div>

    
            <p>These are my thoughts:</p>
            {renderThoughtList()}
            <button onClick={clickAddThought}>Add Thought</button>
        </div>
    )

}

export default UserThoughts