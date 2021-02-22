import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
        <p className="name">Welcome {props.profile.name}</p>
            <ul className="navItems">
            {/* <li className="navcontent"><NavLink to='/Game'>Game</NavLink></li> */}
            <li className="navcontent"><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
            <li className="stats1 stats">Games Won: {props.profile.wins}</li>
            <li className="stats">Games Lost: {props.profile.defeats}</li>
            <li className="stats">Money: {props.profile.money}</li>
        </ul>
        </div>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDisptachToProps)(SignedInLinks)