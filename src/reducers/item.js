import * as Types from '../const/ActionTypes';
var initialState = {};

const item = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CARDS:
            state = action.cards.cards;
            return state;
        case Types.FETCH_SETS:
            state = action.sets.sets;
            return state;
        case Types.FETCH_INFOR_CARD:
            state = action.card.card;
            return state;
        default: return state;
    }
}

export default item;