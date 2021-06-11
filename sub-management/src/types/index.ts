import React from 'react';

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
    category: ICategory;
}