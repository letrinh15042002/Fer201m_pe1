import * as ActionTypes from './ActionTypes';

export const addComment = (itemid, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        itemid: itemid,
        rating: rating,
        author: author,
        comment: comment
    }
});
export const addItem = (title, amount, date) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        title: title,
        amount: amount,
        date: date
    }
});
