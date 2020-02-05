import React from 'react'

const Membre = ({ nom, age, children, cacherNom }) => {
  return (
    <div>
      <h2>L'Accademy Umbrella: {nom} il a {age} ans</h2>
      <p>{children} </p>
      <button onClick={cacherNom}>Delete</button>
    </div>
    
  )
}

export default Membre
