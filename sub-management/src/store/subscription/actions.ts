import axios from 'axios';
import { Dispatch } from 'redux';
import { ISubscription } from '../../types';
import { ACTION_TYPES } from './actionTypes';
const baseUrl = 'http://172.28.0.144:7000/api/subscriptions';

export const getSubscriptions = (userId: number, pageNo: number = 1, pageSize: number = 10) => {
    return (dispatch: Dispatch<any>) => {
        return axios.get(`${baseUrl}?userId=${userId}&pageNo=${pageNo}&pageSize=${pageSize}`).then(
            ({ data }) => {
                dispatch({ type: ACTION_TYPES.GET_SUBSCRIPTIONS, payload: data.subscriptions })
                return { pageCount: data.pageCount, pageSize: data.pageSize };
            }
        );
    };
};

export const addSubscription = (subscription: ISubscription) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrl}`, subscription).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.ADD_SUBSCRIPTION, payload: data }),
        );
    };
};

export const stopSubscription = (subId: number) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrl}`, subId).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.STOP_SUBSCRIPTION, payload: data }),
        );
    };
};

export const deleteSubscription = (subId: number) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrl}`, subId).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.DELETE_SUBSCRIPTION, payload: data }),
        );
    };
};

export const removeSubscriptions = () => {
    return {
        type: ACTION_TYPES.REMOVE_SUBSCRIPTIONS_ON_LOG_OUT,
        payload: null
    }
};