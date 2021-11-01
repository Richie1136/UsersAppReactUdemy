import React from 'react'
import './Button.css'

const Button = ({ type, onClick, children }) => {
  return (
    <div>
      <button className='button' type={type || 'button'} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
