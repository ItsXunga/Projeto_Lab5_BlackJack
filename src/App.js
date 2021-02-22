import React, {useState} from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import firebase from './config/fbConfig'
import Game from './Game'

function App() {

    const user = firebase.auth().currentUser;

    if (user !== null) {
        return (
                <BrowserRouter>
                <div className="background"/>
                <ul className="title">
                    <li className="titleLink">BlackJack</li>
                    <li className="titleLink">Ivo Martins & Miguel Coutinho</li>
                </ul>
                    <Navbar/>
                    <Switch>
                        <Route path='/game' component={Game}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                    </Switch>
                </BrowserRouter>
            );   
    } else {
        return (
            <div className="App">
                <div className="background"/>
                <ul className="title">
                    <li>BlackJack</li>
                    <li>Ivo Martins & Miguel Coutinho</li>
                </ul>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route path='/signup' component={SignUp}/>   
                        <Route path='/signin' component={SignIn}/>
                    </Switch>
                </BrowserRouter>

            </div>
        )
}

    }


export default App;
