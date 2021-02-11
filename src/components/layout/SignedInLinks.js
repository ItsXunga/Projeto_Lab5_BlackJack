import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="navlinks">
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn nav'>TT</NavLink></li>
        </ul>
    )
}

export default SignedInLinks