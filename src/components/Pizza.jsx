import React from 'react'

const Pizza = (props) => {
  return (
    <div>
        <img src={props.photoName} alt={props.name}/>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Pizza