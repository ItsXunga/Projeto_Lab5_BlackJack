import React, { useState, useEffect} from 'react';
import './App.css';
import CardGameBoard from "./components/Game/CardGameBoard";
import ButtonComponent from "./components/Game/ButtonComponent";
import BetInput from "./components/Game/BetInput";
import {drawCardFromDeck} from "./components/Game/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from './config/fbConfig';

function Game() {

    const user = firebase.auth().currentUser;
    const uid = user.uid;

    const [bankCredit, setBankCredit] = useState(null);
    const [currentBet, setCurrentBet] = useState(0);

    useEffect(() => {
        const currentMoney = firebase.firestore().collection("users").doc(uid);
        currentMoney.get().then((doc) => {
            const money = parseInt(doc.data().money);
            if (doc.exists) {
                setBankCredit(money);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    useEffect(() => {
        if(bankCredit!==null) {
            firebase.firestore().collection("users").doc(uid).update({
                money: bankCredit,
            });
        }   
    }, [bankCredit]);



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
        firebase.firestore().collection('users').doc('IS2cNOSi2Kf7tDHNQ9mrvEMLt4G2').set({money: {placeBet}})
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
