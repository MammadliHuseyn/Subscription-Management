import { ISubAction, ISubscription } from "../../types";
import { ACTION_TYPES } from "./actionTypes";

const initialState: Array<ISubscription> = [];

export const reducer = (state = initialState, action: ISubAction) => {
    switch (action.type) {
        case ACTION_TYPES.GET_SUBSCRIPTIONS:
            return [
                ...state,
                ...action.payload
            ]
        case ACTION_TYPES.ADD_SUBSCRIPTION:
            return [
                ...state,
                action.payload
            ]
        case ACTION_TYPES.STOP_SUBSCRIPTION:
            return state.map(sub => {
                if (sub.id === action.payload) {
                    sub.active = false;
                }
                return sub;
            })
        case ACTION_TYPES.DELETE_SUBSCRIPTION:
            return state.filter(sub => sub.id !== action.payload);
        default:
            return state;
    }
}