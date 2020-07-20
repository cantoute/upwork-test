import { combineReducers } from "redux";

import postReducer from './postReducer';

export const allReducer = combineReducers({
    posts: postReducer
});

export default allReducer;
