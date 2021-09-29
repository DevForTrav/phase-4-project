import React from 'react'

const ThoughtDeleteButton = ( props ) => {

    const deleteThought = () => {
        fetch(`/users/${props.userId}/thoughts/${props.thoughtId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            props.didDeleteThought(true)
        })
    }

   const handleClick = () => {
      deleteThought()
   }

   return (
      <button onClick={handleClick}>x</button>
   )

}

export default ThoughtDeleteButton