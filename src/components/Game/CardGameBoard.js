import React, {useState, useEffect} from 'react';
import {newDeck, drawCardFromDeck} from "./api";
import Cardback from "./cardback.png";
import cardHandle from './cardHandle';
import './CardGameBoard.css';
import compareValues from "./cardHandle";
import ButtonComponent from "./ButtonComponent";

const CardGameBoard = () => {
    const [{cardFace, cardValue, cardFace1, cardValue1, cardFace2, cardValue2, cardFace3, cardValue3, cardFace4, cardValue4}, setCardState] = useState({
        cardValue:null,
        cardFace: null,
        cardValue1:null,
        cardFace1:null,
        cardValue2:null,
        cardFace2:null,
        cardValue3:null,
        cardFace3:null,
        cardValue4:null,
        cardFace4:null
    })

    const [deckId, setdeckId] = useState(null);

    useEffect(() => {
        const fetchCardAndDeck = async () => {
            const {deckId, cardResponse} = await newDeck();
            setCardState({
                cardValue: cardResponse.cards[0].value,
                cardFace: cardResponse.cards[0].image,
                cardValue1: cardResponse.cards[1].value,
                cardFace1: cardResponse.cards[1].image,
                cardValue2: cardResponse.cards[2].value,
                cardFace2: cardResponse.cards[2].image,
                cardValue3: cardResponse.cards[3].value,
                cardFace3: cardResponse.cards[3].image,
                cardValue4: cardResponse.cards[4].value,
                cardFace4: cardResponse.cards[4].image,
            })

            setdeckId(deckId);
        }
        fetchCardAndDeck();
    }, [])

    /*const drawAnotherCard = async () => {
        const {value, image} = await drawCardFromDeck(deckId);

        setCardState({
            cardFace4: image,
            cardValue4: value
        })
    }

   */

    const onButtonClick = (e) => {
        if(e.target.name==="hit") {
            console.log("success");
        }
        /*const {value, image} = await drawCardFromDeck(deckId);
        setCardState({
            cardFace4: image,
            cardValue4: value
        })*/
    }

    //const done = true;
    if(!cardFace) {
        return <h1>À espera de cartas...</h1>
    }

    let finished = false;

    let sumDealer = cardHandle(cardValue, cardValue1,"dealer");
    let sumPlayer = cardHandle(cardValue2, cardValue3,"player");

    if (finished) {
    return (
        <div className='cardLayout'>
            <div className='dealerCards'>
            <img height="275" src={cardFace}/>
            <img height="275" src={cardFace1}/>
            <h1>{sumDealer}</h1>
            </div>
            <ButtonComponent onButtonClick={onButtonClick}/>
            <div className='playerCards'>
            <img height="275" src={cardFace2}/>
            <img height="275" src={cardFace3}/>
            <h1>{sumPlayer}</h1>
            </div>
        </div>
    )
}
    else {
        return (
        <div className='cardLayout'>
            <div className='dealerCards'>
                <img height="275" src={cardFace}/>
                <img height="275" src={Cardback}/>
                <h1>{sumDealer}</h1>
            </div>
            <ButtonComponent onButtonClick={onButtonClick}/>
            <div className='playerCards'>
                <h1>{sumPlayer}</h1>
                <img height="275" src={cardFace2}/>
                <img height="275" src={cardFace3}/>
            </div>
        </div>
        )
    }
}
export default CardGameBoard;
