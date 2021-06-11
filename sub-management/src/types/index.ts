import { ACTION_TYPES as SUB_ACTION_TYPES } from '../store/subscription/actionTypes';
import { ACTION_TYPES as USER_ACTION_TYPES } from '../store/user/actionTypes';

export interface IUserLoginForm {
    username: string;
    password: string;
}
export interface IUserRegisterForm {
    username: string;
    password: string;
    active: Boolean;
    name: string;
    surname: string;
    email: string;
}
export interface IUser {
    id: number;
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

interface IActionRegister {
    type: USER_ACTION_TYPES.REGISTER;
    payload: IUser;
}
interface IActionLogin {
    type: USER_ACTION_TYPES.LOG_IN;
    payload: IUser;
}
interface IActionLogOut {
    type: USER_ACTION_TYPES.LOG_OUT;
    paylaod: IUser;
}

export type IUserAction =
    IActionRegister |
    IActionLogin |
    IActionLogOut;