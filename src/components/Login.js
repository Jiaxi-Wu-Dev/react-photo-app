import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

const Login = ({ onRouteChange }) => {
    return (
        <div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            <form className="login-form" >
                Sign In
            <label className="login__input-field">
                    Email:
               <input type='text' name='email' />
                </label>
                <label className="login__input-field">
                    Password:
               <input type='text' name='password' />
                </label>
                <Link to='/signup'>
                    New here?
                </Link>
                <input onClick={onRouteChange} type="submit" value="Sign in" />
            </form>

        </div>
    )
}




export default Login;


/* constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        route: ''
    }
}

emailField = (event) => {
    this.setState({ email: event.target.value })
    console.log(event.target.value)
}

passwordField = (event) => {
    this.setState({ password: event.target.value })
    console.log(event.target.value)
}

onRouteChange = () => {
    this.setState({ route: 'home' });
}


render() {
    return (<div>
        <img className="koifish__picture" src={Aquarium} alt=""></img>
        <form className="login-form" >
            Sign In
            <label className="login__input-field">
                Email:
               <input type='text' name='email' onChange={this.emailField} />
            </label>
            <label className="login__input-field">
                Password:
               <input type='text' name='password' onChange={this.passwordField} />
            </label>
            <Link to='/signup'>
                New here?
            </Link>
            <button onClick={this.onRouteChange}> Login </button>
        </form>
    </div>);
} */