import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn} from '../../store/actions/authActions'

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
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)
