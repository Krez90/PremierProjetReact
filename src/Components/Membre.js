import React from 'react'

const Membre = ({ nom, age, children, cacherNom, handleChange}) => {
  
  return (
    <div>
      <h2>L'Accademy Umbrella: {nom} il a {age} ans</h2>
      <p>{children} </p>
      <input value = {nom} onChange={handleChange} type="text"></input>
      <button onClick={cacherNom}>Supprimer</button>
    </div>
    
  )
}

export default Membre
