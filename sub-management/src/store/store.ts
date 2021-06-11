import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const middleWares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middleWares);