import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from './actionTypes';
import { IUserLoginForm, IUserRegisterForm } from './../../types';
import Swal from 'sweetalert2';
import { getSubscriptions, removeSubscriptions } from './../subscription/actions';
const baseUrl = "http://172.28.0.144:7000/api/users";

export const registerUser = (user: IUserRegisterForm) => {
    return (dispatch: Dispatch) => {
        return axios.post(`${baseUrl}`, user).then(
            ({ data }) => {
                dispatch({ type: ACTION_TYPES.REGISTER, payload: data });
                return data;
            },
        ).then((data) => {
            Swal.fire('Welcome', '', 'success');
            getSubscriptions(data.id);
            return data;
        }).catch(
            err => {
                Swal.fire('', `${err.response.data}`, 'error');
                return err.response.data;
            });
    };
};

export const loginUser = (user: IUserLoginForm) => {
    return (dispatch: Dispatch) => {
        return axios.post(`${baseUrl}/auth`, user)
            .then(({ data }) => {
                dispatch({ type: ACTION_TYPES.LOG_IN, payload: data });
                return data;
            })
            .catch(err => {
                Swal.fire('', `${err.response.data}`, 'error');
                return err.response.data;
            });
    };
};

export const logOutUser = (id: number) => {
    return (dispatch: Dispatch) => {
        return axios.get(`${baseUrl}/logout`)
            .then(({ data }) => {
                dispatch({ type: ACTION_TYPES.LOG_OUT, payload: data });
                dispatch(removeSubscriptions());
            })
            .catch(err => {
                return err.response.data;
            });
    };
}