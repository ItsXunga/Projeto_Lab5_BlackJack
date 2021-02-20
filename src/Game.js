import React, {useState} from 'react';
import './App.css';
import CardGameBoard from "./components/Game/CardGameBoard";
import ButtonComponent from "./components/Game/ButtonComponent";
import BetInput from "./components/Game/BetInput";
import {drawCardFromDeck} from "./components/Game/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Game() {

    const [bankCredit, setBankCredit] = useState(10000);
    const [currentBet, setCurrentBet] = useState(0);

    const notify = (lost) => {
        if(lost) {
            toast.error("You Lost!", {customID:"lost"});
            //toast.clearWaitingQueue();
        } else {
            toast.success("You Win!", {customID:"win"});
            //toast.clearWaitingQueue();
        }
    };

    const setBet = value => {
        let placeBet = bankCredit - value;
        setBankCredit(placeBet);
        setCurrentBet(value);
    }

    const setWin = () => {
        let win = bankCredit + (2*currentBet);
        setBankCredit(win);
        setCurrentBet(0);
    }

    if(currentBet > 0) {
            return (
                <div className="App">
                    <div className="background"/>
                    <div className="betMenu">
    
                        <h2 className="bankCredit">Current Bet: ${currentBet}</h2>
                        <BetInput setBet={setBet}/>
                        <h2 className="bankCredit">Total Credit: ${bankCredit}</h2>
                    </div>
                    <ToastContainer limit={1} position="top-center"/>
                    <CardGameBoard setBet={setBet} setWin={setWin} notify={notify}/>
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
                    <ToastContainer limit={1} position="top-center"/>
                </div>
            )
        }

    }

export default Game;
