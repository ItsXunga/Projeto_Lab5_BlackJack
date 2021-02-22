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

    const [counterWin,setCountWins] = useState(0);
    const [counterLosses,setCountLosses] = useState(0);

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
        if (bankCredit !== null) {
            firebase.firestore().collection("users").doc(uid).update({
                money: bankCredit,
            });
        }
    }, [bankCredit]);

    const notify = (lost) => {
        if (lost) {
            toast.error("You Lost!", {customID: "lost"});
            //toast.clearWaitingQueue();
            setTimeout(() =>  {
            let countLosses = counterLosses + 1;
            setCountLosses(countLosses);
            },5000);
            if(bankCredit <= 0) {
                toast.warn('You went bankrupt! We are refilling your account. Please wait.', {
                    position: "bottom-center",
                    autoClose: 50000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setBankCredit(10000);
                    setCurrentBet(0);
                }, 50000)
            }
        } else {
            toast.success("You Win!", {customID: "win"});
            setTimeout(() =>  {
            let countWins = counterWin + 1;
            setCountWins(countWins);
            },5000);
            //toast.clearWaitingQueue();
        }
    };

    useEffect(() => {
        const currentWins = firebase.firestore().collection("users").doc(uid);
        currentWins.get().then((doc) => {
            const wins = parseInt(doc.data().wins);
            if (doc.exists) {
                setCountWins(wins);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    useEffect(() => {
        if (counterWin !== 0) {
            firebase.firestore().collection("users").doc(uid).update({
                wins: counterWin,
            });
        }
    }, [counterWin]);

    useEffect(() => {
        const currentLosses = firebase.firestore().collection("users").doc(uid);
        currentLosses.get().then((doc) => {
            const losses = parseInt(doc.data().defeats);
            if (doc.exists) {
                setCountLosses(losses);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    useEffect(() => {
        if (counterLosses !== 0) {
            firebase.firestore().collection("users").doc(uid).update({
                defeats: counterLosses,
            });
        }
    }, [counterLosses]);

    const setBet = value => {
        if(value > bankCredit) {
            toast.warn("Can't bet that ammount.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            let placeBet = bankCredit - value;
            setBankCredit(placeBet);
            setCurrentBet(value);
        }
    }

    const setWin = () => {
        let win = bankCredit + (2 * currentBet);
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
