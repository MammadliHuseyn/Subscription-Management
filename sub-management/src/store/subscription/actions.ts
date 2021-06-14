import axios from 'axios';
import { Dispatch } from 'redux';
import { baseUrl } from '../../Api/baseUrl';
import { ISubscriptionCreateForm, ISubscriptionUpdateForm } from '../../types';
import { ACTION_TYPES } from './actionTypes';
const baseUrlSubs = `${baseUrl}/api/subscriptions`;

export const getSubscriptions = (userId: number, pageNo: number = 1, pageSize: number = 10) => {
    return (dispatch: Dispatch<any>) => {
        return axios.get(`${baseUrlSubs}?userId=${userId}&pageNo=${pageNo}&pageSize=${pageSize}`).then(
            ({ data }) => {
                dispatch({ type: ACTION_TYPES.GET_SUBSCRIPTIONS, payload: data.subscriptions })
                return { pageCount: data.pageCount, pageSize: data.pageSize };
            }
        );
    };
};

export const addSubscription = (userId: number, subscription: ISubscriptionCreateForm) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrlSubs}?userId=${userId}`, subscription).then(
            ({ data }) => {
                return data;
            }
        );
    };
};

export const stopSubscription = (subId: number) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${baseUrlSubs}`, subId).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.STOP_SUBSCRIPTION, payload: data }),
        );
    };
};

export const deleteSubscription = (userId: number, subId: number) => {
    return (dispatch: Dispatch<any>) => {
        return axios.delete(`${baseUrlSubs}?userId=${userId}&subId=${subId}`).then(
            ({ data }) => {
                return data;
            }
        );
    };
};

export const updateSubscription = (userId: number, subId: number, subscription: ISubscriptionUpdateForm) => {
    return (dispatch: Dispatch<any>) => {
        return axios.put(`${baseUrlSubs}?userId=${userId}&subId=${subId}`, subscription).then(
            ({ data }) => {
                return data;
            }
        );
    };
};

export const searchSubscriptions = (userId: number, name: string) => {
    return (dispatch: Dispatch<any>) => {
        return axios.get(`${baseUrlSubs}/search?userId=${userId}&name=${name}`).then(
            ({ data }) => {
                dispatch({ type: ACTION_TYPES.GET_SUBSCRIPTIONS, payload: data })
            }
        );
    };
}

export const removeSubscriptions = () => {
    return {
        type: ACTION_TYPES.REMOVE_SUBSCRIPTIONS_ON_LOG_OUT,
        payload: null
    };
};