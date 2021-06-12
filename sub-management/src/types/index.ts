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
    name: string;
    userId: string;
}
enum DURATION_UNIT {
    YEAR = "YEAR",
    MONTH = "MONTH",
    WEEK = "WEEK",
    DAY = "DAY"
}
interface IDuration {
    id: number;
    value: number;
    unit: DURATION_UNIT;
}
export interface ISubscription {
    id: number;
    name: string;
    price: number;
    userId: number;
    group: IGroup;
    lastPaymentDay: string;
    nextPaymentDay: string;
    hasNotification: Boolean;
    active: Boolean;
    duration: IDuration;
}
export interface ISubscriptionUpdateForm {
    name: string;
    price: number;
    userId: number;
    group: IGroup;
    hasNotification: Boolean;
    duration: IDuration;
}
export interface ISubscriptionCreateForm {
    name: string;
    price: number;
    userId: number;
    lastPaymentDay: string;
    active: Boolean;
    hasNotification: Boolean;
    duration: IDuration
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
interface IActionOnLogoutRemove {
    type: SUB_ACTION_TYPES.REMOVE_SUBSCRIPTIONS_ON_LOG_OUT;
    payload: null;
}

export type ISubAction =
    IActionGetSubscriptions |
    IActionAddSubscription |
    IActionStopSubscription |
    IActionDeleteSubscription |
    IActionOnLogoutRemove;

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