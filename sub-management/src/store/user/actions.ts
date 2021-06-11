import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from './actionTypes';
import { IUserRegister } from './../../types';
const baseUrl = "";

const registerUser = (user: IUserRegister) => {
    return (dispatch: Dispatch) => {
        return axios.get(`${baseUrl}`).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.REGISTER, data }),
            err => console.log(err)
        );
    };
};