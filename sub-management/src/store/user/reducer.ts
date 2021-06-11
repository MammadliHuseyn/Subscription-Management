import { IStoredUser, IUserAction } from "../../types";
import { ACTION_TYPES } from "./actionTypes";

const initialState: IStoredUser = {
    "id": -1,
    "email": '',
    "name": '',
    "surname": '',
    "username": ''
}

export const reducer = (state = initialState, action: IUserAction) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_IN:
            return action.payload;
        case ACTION_TYPES.LOG_OUT:
            return initialState;
        case ACTION_TYPES.REGISTER:
            return action.payload;
        default:
            return state;
    }
}