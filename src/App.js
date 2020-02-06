import React, { Component } from 'react'
import './App.css'
import Membre from './Components/Membre'
import Button from './Components/Button'


// Ceci est le state de "famille"
const famille = {
  membre1: {
    nom: 'Jess',
    age: 150
  },

  membre2: {
    nom: 'Tony',
    age: 16
  },

  membre3: {
    nom: 'Jessica',
    age: 32

  },

  membre4: {
    nom: 'Bryan',
    age : 26
  }

}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  // Fin du state______________________________________


  handleClick = () => {
    const famille = {...this.state.famille }
    famille.membre1.age += 1
    this.setState({ famille })
  }


  // Ont fait passé l'id dans l'event
  handleChange = (event, id) =>{
    const famille = {...this.state.famille }
    const nom = event.target.value
    // ici ont fait passé l'id pour récupéré LE nom
    famille[id].nom = nom
    this.setState({ famille })
  }

  handleChangeage = (event) =>{
    const famille = {...this.state.famille}
    const age = event.target.value
    famille.membre1.age = age
    this.setState({ famille })
  }


// Cette fonction permet de fait l'inverse. exemple : isShow = false, sa le remplace par true. Et si c'est true, le passe a false
  handleShowDescription = () =>{
    const isShow = !this.state.isShow
    this.setState({isShow})
  }
  // ________________________________________________________________________________________________________________________________

  cacherNom = id => {
    const famille = {...this.state.famille}
    famille [id].nom = ''
    this.setState({famille})
  }

  render () {
    // Cacher ou afficher un élément enfant 
    const {famille, isShow} = this.state
    let description = null
    if (isShow){
      description = <strong>Je suis le plus puissante de l'umbrella Accademy !</strong> 
    }
// ___________________________________________________________________________________________
    const liste = Object.keys(famille)
   
    .map(membre => (
      <Membre
      key= {membre}
      handleChange= {event => this.handleChange (event, membre)}
      cacherNom = {() => this.cacherNom(membre)}
      nom = {famille[membre].nom}
      age = {famille[membre].age}/>
          
    ))

    return (
      <div className='App'>
        <h1>L'Accademy Umbrella</h1>
        
        { liste }
        {/* <Membre nom = {famille.membre4.nom} age = {famille.membre4.age} >
        { description }
          <button onClick={this.handleShowDescription} >
            {
              isShow ? 'Cacher' : 'Montrer'
            }
          </button>
        </Membre> */}
          {/* <Button 
          plusun={this.handleClick}/> */}
      </div>
    )
  }
}

export default App
