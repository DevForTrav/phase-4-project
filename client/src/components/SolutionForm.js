import React, { useState } from 'react'

const SolutionForm = () => {
   // solution properties
   const [renderSolutionForm, setRenderSolutionForm] = useState(false)
   const [solutionDescription, setSolutionDescription] = useState('')
   const [immediateAction, setImmediateAction] = useState(false)
   const [firstStep, setFirstStep] = useState('')
   const [when, setWhen] = useState('')

   const createNewSolution = () => {
      fetch("/solutions", {
         method: "POST",
         headers: {
               "Content-Type": "application/json"
         },
         body: JSON.stringify({
               description: solutionDescription,
               immediate_action: immediateAction,
               first_step: firstStep,
               when
         })
      }).then((res) => {
         if (res.ok) {
               res.json().then((solution) => {
                  console.log(solution)

               })
         }
      })
   }

   const handleClick = () => {
      setRenderSolutionForm(!renderSolutionForm)
      createNewSolution()
   }

   return (
      <>
         <button onClick={handleClick}>Add Solution</button>
         {renderSolutionForm ? 
            <>
               <p>Solution</p>
               <form onSubmit={handleClick}>
                  <label>
                     Description:
                     <input 
                           name="description" 
                           type="text"
                           onChange={ (e) => {setSolutionDescription(e.target.value)}}
                     >
                     </input>
                  </label>
                  <label>
                     Is there an immediate action:
                     <input 
                           name="immediate_action" 
                           type="boolean"
                           onChange={ (e) => {setImmediateAction(e.target.value)}}
                     >
                     </input>
                  </label>
                  <label>
                     First Step:
                     <input 
                           name="first_step" 
                           type="text"
                           onChange={ (e) => {setFirstStep(e.target.value)}}
                     >
                     </input>
                  </label>
                  <label>
                     When:
                     <input 
                           name="When" 
                           type="text"
                           onChange={ (e) => {setWhen(e.target.value)}}
                     >
                     </input>
                  </label>
                  <input type="submit" value="Create" ></input>
               </form>
            </>
            : 
            null
         }
      </>
   )

}

export default SolutionForm