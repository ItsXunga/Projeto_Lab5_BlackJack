import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="navMenu">
            <div className="container">
                <Link to='/' className="brand-logo">BlackJack</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>                             
    )
}

export default Navbar