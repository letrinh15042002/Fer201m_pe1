import { ITEMS } from '../shared/items';
import * as ActionTypes from './ActionTypes';


export const Items = (state = ITEMS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            var item = action.payload;
            item.id = state.length;
            // item.date = new Date().toISOString();
            console.log("Item: ", item);
            return state.concat(item);

        default:
            return state;
    }
};
