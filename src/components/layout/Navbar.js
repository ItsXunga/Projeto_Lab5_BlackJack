import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="navMenu">
            <div className="navlinks">
                <Link to='/' className="brand-logo">BlackJack</Link>
                { links }
            </div>
        </nav>                             
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)