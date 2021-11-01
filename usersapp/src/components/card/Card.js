import React from 'react'
import './Card.css'

const Card = ({ children, classname }) => {
  return (
    <div className={`card ${classname}`}>
      {children}
    </div>
  )
}

export default Card
