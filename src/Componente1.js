import React from 'react'

const Componente1 = () => {
    return (
        <div>
            pippoteresa
            <Persona />
            <Messaggio /> 
        </div>

    )
}

const Persona = () => {
    return <p>Mi chiamo Vala</p>
  }
  
  const Messaggio = () => {
    return <p>Questo è un messaggio</p>
  }

export default Componente1
