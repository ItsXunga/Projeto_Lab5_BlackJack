const cardHandle = (firstCard, secondCard, person) => {
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

    let sum = 0;

    switch (person) {
        case "player":
            sum = parseInt(firstCard) + parseInt(secondCard);
            break;

        case "dealer":
            sum = firstCard;
            break;
    }
    return sum;
};

export default cardHandle;
