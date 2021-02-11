import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="navlinks">
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn nav'>TT</NavLink></li>
        </ul>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDisptachToProps)(SignedInLinks)