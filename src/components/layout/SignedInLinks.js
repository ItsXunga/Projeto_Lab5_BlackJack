import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="navlinks">
            <li><NavLink to='/Game'>Game</NavLink></li>
            <li><NavLink to='/'><a onClick={props.signOut}>Log Out</a></NavLink></li>
            <li className="btn nav">Games Won: {props.profile.wins}</li>
            <li className="btn nav">Games Lost: {props.profile.defeats}</li>
            <li className="btn nav">Money: {props.profile.money}</li>
        </ul>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDisptachToProps)(SignedInLinks)