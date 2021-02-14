import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="signup">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-5">Sign Up</h5>
                    <div className="input-field">
                        <input type="email" id="email" className="signup_input" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" className="signup_input" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="name" id="name" className="signup_input" placeholder="Name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0">SIGN UP</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
