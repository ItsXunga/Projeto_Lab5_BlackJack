import React, {useState, useEffect} from 'react';
import {newDeck, drawCardFromDeck} from "./api";
import Cardback from "./cardback.png";
import cardHandle from './cardHandle';
import './CardGameBoard.css';
import compareValues from "./cardHandle";
import ButtonComponent from "./ButtonComponent";

const CardGameBoard = ({setBet, setWin,notify}) => {
    const [{cardFace0, cardValue0, cardFace1, cardValue1, cardFace2, cardValue2, cardFace3, cardValue3, cardFace4, cardValue4, cardFace5, cardValue5, cardFace6, cardValue6, cardFace7, cardValue7, cardFace8, cardValue8, cardFace9, cardValue9}, setCardState] = useState({
        cardValue0: null,
        cardFace0: null,
        cardValue1: null,
        cardFace1: null,
        cardValue2: null,
        cardFace2: null,
        cardValue3: null,
        cardFace3: null,
        cardValue4: null,
        cardFace4: null,
        cardFace5: null,
        cardValue5: null,
        cardFace6: null,
        cardValue6: null,
        cardFace7: null,
        cardValue7: null,
        cardFace8: null,
        cardValue8: null,
        cardFace9: null
    })

    const [deckId, setdeckId] = useState(null);

    useEffect(() => {
        const fetchCardAndDeck = async () => {
            const {deckId, cardResponse} = await newDeck();
            setCardState({
                cardValue0: cardResponse.cards[0].value,
                cardFace0: cardResponse.cards[0].image,
                cardValue1: cardResponse.cards[1].value,
                cardFace1: cardResponse.cards[1].image,
                cardValue2: cardResponse.cards[2].value,
                cardFace2: cardResponse.cards[2].image,
                cardValue3: cardResponse.cards[3].value,
                cardFace3: cardResponse.cards[3].image,
                cardValue4: cardResponse.cards[4].value,
                cardFace4: cardResponse.cards[4].image,
                cardValue5: cardResponse.cards[5].value,
                cardFace5: cardResponse.cards[5].image,
                cardValue6: cardResponse.cards[6].value,
                cardFace6: cardResponse.cards[6].image,
                cardValue7: cardResponse.cards[7].value,
                cardFace7: cardResponse.cards[7].image,
                cardValue8: cardResponse.cards[8].value,
                cardFace8: cardResponse.cards[8].image,
                cardValue9: cardResponse.cards[9].value,
                cardFace9: cardResponse.cards[9].image,
            })

            setdeckId(deckId);
        }
        fetchCardAndDeck();
    }, [])

    const [hitButton, sethitButton] = useState(0);
    const [finished, setFinished] = useState(false);

    const onButtonClick = (e) => {
        if (e.target.name === "hit") {
            sethitButton(hitButton + 1);
        }

        if(e.target.name === "stay") {
            setFinished(true);
        }
    }

    if (!cardFace0) {
        return <h1>À espera de cartas...</h1>
    }

    if (finished === false ) {
        let sumDealer = cardHandle(cardValue0, 0, 0, 0, 0, "dealer");
        let lost = false;
        switch (hitButton) {
                case 0:
                    let sumPlayer0 = cardHandle(cardValue2, cardValue3, 0, 0, 0, "player");
                    return (
                        <div className='cardLayout'>
                            <div className='dealerCards'>
                                <img height="275" src={cardFace0}/>
                                <img height="275" src={Cardback}/>
                                <h1>{sumDealer}</h1>
                            </div>
                            <ButtonComponent onButtonClick={onButtonClick}/>
                            <div className='playerCards'>
                                <h1>{sumPlayer0}</h1>
                                <img height="275" src={cardFace2}/>
                                <img height="275" src={cardFace3}/>
                            </div>
                        </div>
                    )

                    break;

                case 1:
                    let sumPlayer1 = cardHandle(cardValue2, cardValue3, cardValue4, 0, 0, "player");
                    if (sumPlayer1 > 21) {
                        lost = true;
                    }
                    if(lost) {
                        setTimeout(() => {setBet(0);}, 2000);
                        notify(lost);
                    }
                    return (
                        <div className='cardLayout'>
                            <div className='dealerCards'>
                                <img height="275" src={cardFace0}/>
                                <img height="275" src={Cardback}/>
                                <h1>{sumDealer}</h1>
                            </div>
                            <ButtonComponent onButtonClick={onButtonClick}/>
                            <div className='playerCards'>
                                <h1>{sumPlayer1}</h1>
                                <img height="275" src={cardFace2}/>
                                <img height="275" src={cardFace3}/>
                                <img height="275" src={cardFace4}/>
                            </div>
                        </div>
                    )

                    break;

                case 2:
                    let sumPlayer2 = cardHandle(cardValue2, cardValue3, cardValue4, cardValue5, 0, "player");
                    if (sumPlayer2 > 21) {
                        lost = true;
                    }
                    if(lost) {
                        setTimeout(() => {setBet(0);}, 2000);
                        notify(lost);
                    }
                    return (
                        <div className='cardLayout'>
                            <div className='dealerCards'>
                                <img height="275" src={cardFace0}/>
                                <img height="275" src={Cardback}/>
                                <h1>{sumDealer}</h1>
                            </div>
                            <ButtonComponent onButtonClick={onButtonClick}/>
                            <div className='playerCards'>
                                <h1>{sumPlayer2}</h1>
                                <img height="275" src={cardFace2}/>
                                <img height="275" src={cardFace3}/>
                                <img height="275" src={cardFace4}/>
                                <img height="275" src={cardFace5}/>
                            </div>
                        </div>
                    )
                    break;
                case 3:
                    let sumPlayer3 = cardHandle(cardValue2, cardValue3, cardValue4, cardValue5, cardValue6, "player");
                    if (sumPlayer3 > 21) {
                        lost = true;
                    }

                    if(lost) {
                        setTimeout(() => {setBet(0);}, 2000);
                        notify(lost);
                    }

                    return (
                        <div className='cardLayout'>
                            <div className='dealerCards'>
                                <img height="275" src={cardFace0}/>
                                <img height="275" src={Cardback}/>
                                <h1>{sumDealer}</h1>
                            </div>
                            <ButtonComponent onButtonClick={onButtonClick}/>
                            <div className='playerCards'>
                                <h1>{sumPlayer3}</h1>
                                <img height="275" src={cardFace2}/>
                                <img height="275" src={cardFace3}/>
                                <img height="275" src={cardFace4}/>
                                <img height="275" src={cardFace5}/>
                                <img height="275" src={cardFace6}/>
                            </div>
                        </div>
                    )

                    break;

            }
        } else {
        let lost;
        switch (hitButton) {
            case 0:
                let sumPlayer0 = cardHandle(cardValue2, cardValue3, 0, 0, 0, "player");
                let sumDealer0 = cardHandle(cardValue0, cardValue1, 0, 0, 0, "dealer");
                let sumDealerState = 0;
                if (sumDealer0 < 17 && sumDealer0 < 21) {
                    sumDealer0 = cardHandle(cardValue0, cardValue1, cardValue7, 0, 0, "dealer");
                    sumDealerState = 1
                    if (sumDealer0 < 17 && sumDealer0 < 21) {
                        sumDealer0 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, 0, "dealer");
                        sumDealerState = 2;
                        if (sumDealer0 < 17 && sumDealer0 < 21) {
                            sumDealer0 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, cardValue9, "dealer")
                            sumDealerState = 3;
                        }
                    }
                }

                switch (sumDealerState) {
                    case 0:
                        if(sumDealer0 > sumPlayer0 && sumDealer0 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            sumDealerState = 0;
                            lost = false;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <h1>{sumDealer0}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer0}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                </div>
                            </div>
                        )
                        break;

                    case 1:
                        if(sumDealer0 > sumPlayer0 && sumDealer0 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            sumDealerState = 0;
                            lost = false;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <h1>{sumDealer0}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer0}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                </div>
                            </div>
                        )

                        break;

                    case 2:
                        if(sumDealer0 > sumPlayer0 && sumDealer0 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            sumDealerState = 0;
                            lost = false;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <h1>{sumDealer0}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer0}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                </div>
                            </div>
                        )
                        break;

                    case 3:
                        if(sumDealer0 > sumPlayer0 && sumDealer0 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            sumDealerState = 0;
                            lost = false;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <img height="275" src={cardFace9}/>
                                    <h1>{sumDealer0}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer0}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                </div>
                            </div>
                        )
                        break;
                }


            case 1:
                let sumPlayer1 = cardHandle(cardValue2, cardValue3, cardValue4, 0, 0, "player");
                let sumDealer1 = cardHandle(cardValue0, cardValue1, 0, 0, 0, "dealer");
                let sumDealerState1 = 0;
                if (sumDealer1 < 17 && sumDealer1 < 21) {
                    sumDealer1 = cardHandle(cardValue0, cardValue1, cardValue7, 0, 0, "dealer");
                    sumDealerState1 = 1
                    if (sumDealer1 < 17 && sumDealer1 < 21) {
                        sumDealer1 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, 0, "dealer");
                        sumDealerState1 = 2;
                        if (sumDealer1 < 17 && sumDealer1 < 21) {
                            sumDealer1 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, cardValue9, "dealer")
                            sumDealerState1 = 3;
                        }
                    }
                }

                switch (sumDealerState1) {
                    case 0:
                        if(sumDealer1 > sumPlayer1 && sumDealer1 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState1 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState1 = 0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <h1>{sumDealer1}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer1}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                </div>
                            </div>
                        )

                        break;

                    case 1:
                        if(sumDealer1 > sumPlayer1 && sumDealer1 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState1 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState1 = 0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <h1>{sumDealer1}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer1}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                </div>
                            </div>
                        )

                        break;

                    case 2:
                        if(sumDealer1 > sumPlayer1 && sumDealer1 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState1 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState1 = 0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <h1>{sumDealer1}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer1}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                </div>
                            </div>
                        )
                        break;

                    case 3:
                        if(sumDealer1 > sumPlayer1 && sumDealer1 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState1 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState1 = 0;
                            notify(lost);
                            setWin();

                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <img height="275" src={cardFace9}/>
                                    <h1>{sumDealer1}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer1}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                </div>
                            </div>
                        )
                        break;
                }

            case 2:
                let sumPlayer2 = cardHandle(cardValue2, cardValue3, cardValue4, cardValue5, 0, "player");
                let sumDealer2 = cardHandle(cardValue0, cardValue1, 0, 0, 0, "dealer");
                let sumDealerState2 = 0;
                if (sumDealer2 < 17 && sumDealer2 < 21) {
                    sumDealer2 = cardHandle(cardValue0, cardValue1, cardValue7, 0, 0, "dealer");
                    sumDealerState2 = 1
                    if (sumDealer2 < 17 && sumDealer2 < 21) {
                        sumDealer2 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, 0, "dealer");
                        sumDealerState2 = 2;
                        if (sumDealer2 < 17 && sumDealer2 < 21) {
                            sumDealer2 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8, cardValue9, "dealer")
                            sumDealerState2 = 3;
                        }
                    }
                }

                switch (sumDealerState2) {
                    case 0:
                        if(sumDealer2 > sumPlayer2 && sumDealer2 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState2 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            sumDealerState2 = 0;
                            lost = false;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <h1>{sumDealer2}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer2}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                </div>
                            </div>
                        )

                        break;

                    case 1:
                        if(sumDealer2 > sumPlayer2 && sumDealer2 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState2 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState2=0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <h1>{sumDealer2}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer2}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                </div>
                            </div>
                        )

                        break;

                    case 2:
                        if(sumDealer2 > sumPlayer2 && sumDealer2 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState2 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            notify(lost);
                            setWin();
                            sumDealerState2 = 0;

                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <h1>{sumDealer2}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer2}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                </div>
                            </div>
                        )
                        break;

                    case 3:
                        if(sumDealer2 > sumPlayer2 && sumDealer2 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState2 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState2 = 0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <img height="275" src={cardFace9}/>
                                    <h1>{sumDealer2}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer2}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                </div>
                            </div>
                        )
                        break;
                }

            case 3:
                let sumPlayer3 = cardHandle(cardValue2, cardValue3, cardValue4, cardValue5, cardValue6, "player");
                let sumDealer3 = cardHandle(cardValue0, cardValue1, 0, 0,0,"dealer");
                let sumDealerState3 = 0;
                if(sumDealer3 < 17 && sumDealer3 < 21) {
                    sumDealer3 = cardHandle(cardValue0, cardValue1, cardValue7, 0,0,"dealer");
                    sumDealerState3 = 1
                    if(sumDealer3 < 17 && sumDealer3 < 21) {
                        sumDealer3 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8,0,"dealer");
                        sumDealerState3 = 2;
                        if(sumDealer3 < 17 && sumDealer3 < 21) {
                            sumDealer3 = cardHandle(cardValue0, cardValue1, cardValue7, cardValue8,cardValue9,"dealer")
                            sumDealerState3 = 3;
                        }
                    }
                }

                switch (sumDealerState3) {
                    case 0:
                        if(sumDealer3 > sumPlayer3 && sumDealer3 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState3 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState3 = 0;
                            notify(lost);
                            setWin();

                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <h1>{sumDealer3}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer3}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                    <img height="275" src={cardFace6}/>
                                </div>
                            </div>
                        )

                        break;

                    case 1:
                        if(sumDealer3 > sumPlayer3 && sumDealer3 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState3 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState3 = 0;
                            notify(lost);
                            setWin();

                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <h1>{sumDealer3}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer3}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                    <img height="275" src={cardFace6}/>
                                </div>
                            </div>
                        )

                        break;

                    case 2:
                        if(sumDealer3 > sumPlayer3 && sumDealer3 < 21) {
                            lost=true;
                            notify(lost);
                            sumDealerState3 = 0;
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState3 = 0;
                            notify(lost);
                            setWin();
                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <h1>{sumDealer3}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer3}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                    <img height="275" src={cardFace6}/>
                                </div>
                            </div>
                        )
                        break;

                    case 3:
                        if(sumDealer3 > sumPlayer3 && sumDealer3 < 21) {
                            lost=true;
                            sumDealerState3 = 0;
                            notify(lost);
                            setTimeout(() => {setBet(0);}, 2000);
                        } else {
                            lost = false;
                            sumDealerState3 = 0;
                            notify(lost);
                            setWin();

                        }

                        return (
                            <div className='cardLayout'>
                                <div className='dealerCards'>
                                    <img height="275" src={cardFace0}/>
                                    <img height="275" src={cardFace1}/>
                                    <img height="275" src={cardFace7}/>
                                    <img height="275" src={cardFace8}/>
                                    <img height="275" src={cardFace9}/>
                                    <h1>{sumDealer3}</h1>
                                </div>
                                <ButtonComponent onButtonClick={onButtonClick}/>
                                <div className='playerCards'>
                                    <h1>{sumPlayer3}</h1>
                                    <img height="275" src={cardFace2}/>
                                    <img height="275" src={cardFace3}/>
                                    <img height="275" src={cardFace4}/>
                                    <img height="275" src={cardFace5}/>
                                    <img height="275" src={cardFace6}/>
                                </div>
                            </div>
                        )
                        break;
                    }
                }
        }
}
export default CardGameBoard;
