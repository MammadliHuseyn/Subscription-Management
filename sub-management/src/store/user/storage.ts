import { IUser } from "../../types";

export enum STORAGE_ACTIONS {
    GET_USER_FROM_STORAGE = "GET_USER_FROM_STORAGE",
    ADD_USER_TO_STORAGE = "ADD_USER_TO_STORAGE",
    DELETE_USER_FROM_STORAGE = "DELETE_USER_FROM_STORAGE"
}

const USER_IN_STORAGE = "USER_IN_STORAGE";

const initialUser: IUser = {
    id: -1,
    email: '',
    name: '',
    surname: '',
    username: ''
}

export const userActionsWithStore = (user = initialUser, action: STORAGE_ACTIONS) => {
    switch (action) {
        case STORAGE_ACTIONS.GET_USER_FROM_STORAGE:
            return JSON.parse(localStorage.getItem(USER_IN_STORAGE)!);
        case STORAGE_ACTIONS.ADD_USER_TO_STORAGE:
            localStorage.setItem(USER_IN_STORAGE, JSON.stringify(user));
            break;
        case STORAGE_ACTIONS.DELETE_USER_FROM_STORAGE:
            localStorage.removeItem(USER_IN_STORAGE);
            break;
        default:
            break;
    }
}