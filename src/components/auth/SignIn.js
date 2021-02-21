import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to ='/' />

        return (
            <div className="container signin">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="gey-text text-darken-5">Sign In</h5>
                    <div className="input-field">
                        <input type="email" id="email" className="signin_input" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" className="signin_input" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0">Login</button>
                            <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
