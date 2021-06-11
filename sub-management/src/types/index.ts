import { ACTION_TYPES as SUB_ACTION_TYPES } from '../store/subscription/actionTypes';

export interface IUserLogin {
    username: string;
    password: string;
}
export interface IUserRegister {
    username: string;
    password: string;
    active: Boolean;
    name: string;
    surname: string;
    email: string;
}
export interface IStoredUser {
    id: string;
    username: string;
    email: string;
    name: string;
    surname: string;
}
interface IGroup {
    id: number;
    value: string;
    type: string;
}
interface IPrice {
    id: number;
    amount: string;
    currency: string;
}
interface ICategory {
    id: number;
    name: string;
}
export interface ISubscription {
    id: number;
    name: string;
    price: IPrice;
    userId: number;
    group: IGroup;
    active: Boolean;
    category: ICategory;
    subscriptionTime: string;
}

interface IActionGetSubscriptions {
    type: SUB_ACTION_TYPES.GET_SUBSCRIPTIONS;
    payload: Array<ISubscription>;
}
interface IActionAddSubscription {
    type: SUB_ACTION_TYPES.ADD_SUBSCRIPTION;
    payload: ISubscription;
}
interface IActionStopSubscription {
    type: SUB_ACTION_TYPES.STOP_SUBSCRIPTION;
    payload: number; // subscription id
}
interface IActionDeleteSubscription {
    type: SUB_ACTION_TYPES.DELETE_SUBSCRIPTION;
    payload: number; // subscription id
}

export type ISubAction =
    IActionGetSubscriptions |
    IActionAddSubscription |
    IActionStopSubscription |
    IActionDeleteSubscription;
