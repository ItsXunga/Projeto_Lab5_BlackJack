import axios from "axios";

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
})

export const newDeck = async () => {
    const {data} = await api.get('new/shuffle/', {
        params: {
            deck_count: 1
        }
    });

    const {deck_id: deckId} = data;

    const {data: cardResponse} = await api.get(`${deckId}/draw/`, {
        params: {
            count: 10
        }
    });

    return {cardResponse,deckId};
};

    export const drawCardFromDeck = async (deckId) => {
        const {data} = await api.get(`${deckId}/draw/`, {
        params: {
            count:1
        }
        })

        const {cards} = data;
        const {value, image} = cards[0];
        return {deckId, value, image};
    }

    export const shuffleDeck = (deckId) => {
        api.get(`${deckId}/shuffle/`)
    }