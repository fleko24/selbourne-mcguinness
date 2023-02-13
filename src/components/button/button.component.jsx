import React from 'react'
import './button.style.scss'

const Button = ({text, ...buttonProps}) => { 
  const { handleClick }  =  buttonProps 
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button