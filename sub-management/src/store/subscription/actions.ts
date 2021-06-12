import axios from 'axios';
import { Dispatch } from 'redux';
import { ISubscriptionCreateForm } from '../../types';
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

export const addSubscription = (userId: number, subscription: ISubscriptionCreateForm) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrl}?userId=${userId}`, subscription).then(
            ({ data }) => {
                return data;
            }
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

export const deleteSubscription = (userId: number, subId: number) => {
    return (dispatch: Dispatch<any>) => {
        return axios.delete(`${baseUrl}?userId=${userId}&subId=${subId}`).then(
            ({ data }) => {
                return data;
            }
        );
    };
};

export const removeSubscriptions = () => {
    return {
        type: ACTION_TYPES.REMOVE_SUBSCRIPTIONS_ON_LOG_OUT,
        payload: null
    };
};