import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from './actionTypes';
import { IUserLoginForm, IUserRegisterForm } from './../../types';
import Swal from 'sweetalert2';
const baseUrl = "http://172.28.0.91:7000/api";

export const registerUser = (user: IUserRegisterForm) => {
    return (dispatch: Dispatch) => {
        return axios.post(`${baseUrl}/users`, user).then(
            ({ data }) => {
                dispatch({ type: ACTION_TYPES.REGISTER, payload: data });
                return data;
            },
        ).then((data) => {
            Swal.fire('Welcome', '', 'success');
            return data
        })
            .catch(
                err => {
                    Swal.fire('', `${err.response.data}`, 'error');
                    return err.response.data;
                });
    };
};

export const loginUser = (user: IUserLoginForm) => {
    return (dispatch: Dispatch) => {
        return axios.post(`${baseUrl}`, user).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.LOG_IN, payload: data })
        ).catch(
            err => {
                Swal.fire('', `${err.response.data}`, 'error');
                return err.response.data;
            }
        );
    };
};

export const logOutUser = (id: string) => {
    return {
        type: ACTION_TYPES.LOG_OUT,
        payload: id
    }
}