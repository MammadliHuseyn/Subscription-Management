import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { STORAGE_ACTIONS, userActionsWithStore } from '../store/user/storage';

interface IProps {
    children: any;
    exact: boolean;
    path: string;
}

export const AuthRouter: React.FC<IProps> = ({ children, ...rest }) => {
    const user = React.useMemo(() => {
        return userActionsWithStore(undefined, STORAGE_ACTIONS.GET_USER_FROM_STORAGE);
    }, [])

    return user ? (
        <Route {...rest}>
            {children}
        </Route>
    ) : <Redirect to="/login" />
}
