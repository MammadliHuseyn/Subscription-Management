import { combineReducers } from 'redux';
import { reducer as SubReducer } from './subscription/reducer';
import { reducer as UserReducer } from './user/reducer';

export const rootReducer = combineReducers({
    SubReducer,
    UserReducer
})