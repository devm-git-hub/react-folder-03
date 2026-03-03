import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt=''></img>
      <h2>{props.user},{props.age}</h2>
      
      <p>{props.description}</p>
    </div>
  )
}

export default Card

