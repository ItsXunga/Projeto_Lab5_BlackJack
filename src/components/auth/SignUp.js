import React, { Component } from 'react'

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
        console.log(this.state);
    }
    render() {
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
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
