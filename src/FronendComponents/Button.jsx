import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({text, className, link}) => {
  return (
    <NavLink to={link} className={`px-3 py-2 font-serif font-semibold rounded-lg text-base ${className}`} >
        {text}
    </NavLink>
  )
}

export default Button
