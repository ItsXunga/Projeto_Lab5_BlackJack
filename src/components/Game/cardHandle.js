const cardHandle = (firstCard, secondCard, thirdCard, fourthCard, fifthCard, person) => {

    let sum = 0;

    switch(firstCard) {
        case "ACE":
            firstCard = 11;
            break;
        case "JACK":
            firstCard = 10;
            break;
        case "QUEEN":
            firstCard = 10;
            break;
        case "KING":
            firstCard = 10;
            break;
        default:
            break;
    }

    switch(secondCard) {
        case "ACE":
            secondCard = 11;
            break;
        case "JACK":
            secondCard = 10;
            break;
        case "QUEEN":
            secondCard = 10;
            break;
        case "KING":
            secondCard = 10;
            break;
        default:
            break;
    }

    switch(thirdCard) {
        case "ACE":
            thirdCard = 11;
            break;
        case "JACK":
            thirdCard = 10;
            break;
        case "QUEEN":
            thirdCard = 10;
            break;
        case "KING":
            thirdCard = 10;
            break;
        default:
            break;
    }

    switch(fourthCard) {
        case "ACE":
            fourthCard = 11;
            break;
        case "JACK":
            fourthCard = 10;
            break;
        case "QUEEN":
            fourthCard = 10;
            break;
        case "KING":
            fourthCard = 10;
            break;
        default:
            break;
    }

    switch(fifthCard) {
        case "ACE":
            fifthCard = 11;
            break;
        case "JACK":
            fifthCard = 10;
            break;
        case "QUEEN":
            fifthCard = 10;
            break;
        case "KING":
            fifthCard = 10;
            break;
        default:
            break;
    }

    switch (person) {
        case "player":
            sum = parseInt(firstCard) + parseInt(secondCard)+ parseInt(thirdCard) + parseInt(fourthCard) + parseInt(fifthCard);

            if(sum > 21 && parseInt(firstCard) === 11 | parseInt(secondCard) === 11 | parseInt(thirdCard) === 11 | parseInt(fourthCard) === 11 | parseInt(fifthCard) === 11) {
                sum = sum - 10;
            }

            break;

        case "dealer":
            sum = parseInt(firstCard) + parseInt(secondCard)+ parseInt(thirdCard) + parseInt(fourthCard) + parseInt(fifthCard);

            if(sum > 21 && parseInt(firstCard) === 11 | parseInt(secondCard) === 11 | parseInt(thirdCard) === 11 | parseInt(fourthCard) === 11 | parseInt(fifthCard) === 11) {
                sum = sum - 10;
            }

            break;
    }
        return sum;
};
 export default cardHandle;
