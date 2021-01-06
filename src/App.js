import React, {useState} from 'react';
import './App.css';
import CardGameBoard from "./components/Game/CardGameBoard";
import ButtonComponent from "./components/Game/ButtonComponent";
import BetInput from "./components/Game/BetInput";
import {drawCardFromDeck} from "./components/Game/api";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
    const [bankCredit, setBankCredit] = useState(10000);
    const [currentBet, setCurrentBet] = useState(0);

    const setBet = value => {
        let placeBet = bankCredit - value;
        setBankCredit(placeBet);
        setCurrentBet(value);
    }

    /*const onButtonClick = async ({target : {name:action}}) => {
    const {value, image} = await drawCardFromDeck(deckId);
    console.log(value, image);
    }*/

    if(currentBet > 0) {
        return (
            <div className="App">
                <div className="background"/>
                <div className="betMenu">

                    <h2 className="bankCredit">Current Bet: ${currentBet}</h2>
                    <BetInput setBet={setBet}/>
                    <h2 className="bankCredit">Total Credit: ${bankCredit}</h2>

                </div>
                <CardGameBoard/>
                
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                    </Switch>
                </BrowserRouter>


            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="background"/>
                <div className="betMenu">

                    <h2 className="bankCredit">Current Bet: ${currentBet}</h2>
                    <BetInput setBet={setBet}/>
                    <h2 className="bankCredit">Total Credit: ${bankCredit}</h2>

                </div>
            </div>
        )
    }
}

export default App;
