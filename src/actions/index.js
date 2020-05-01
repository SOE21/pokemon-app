import * as Types from './../const/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchCardsRequest = (params) => {
    return (dispatch) => {
        callApi(`${params}`, 'GET', null).then(res => {
            dispatch(actFetchCards(res.data));
        });
    };
}

export const actFetchCards = (cards) => {
    return {
        type: Types.FETCH_CARDS,
        cards
    }
}

export const actFetchSetsRequest = (params) => {
    return (dispatch) => {
        callApi(`${params}`, 'GET', null).then(res => {
            dispatch(actFetchSets(res.data));
        });
    };
}

export const actFetchSets = (sets) => {
    return {
        type: Types.FETCH_SETS,
        sets
    }
}

export const actFetchInforCardRequest = (id) => {
    return (dispatch) => {
        callApi(`cards/${id}`, 'GET', null).then(res => {
            dispatch(actFetchInforCard(res.data))
        })
    }
}

export const actFetchInforCard = (card) => {
    return {
        type: Types.FETCH_INFOR_CARD,
        card
    }
}

