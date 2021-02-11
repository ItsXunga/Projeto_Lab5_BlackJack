import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="navMenu">
            <div className="navlinks">
                <Link to='/' className="brand-logo">BlackJack</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>                             
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {}
}

export default connect(mapStateToProps)(Navbar)