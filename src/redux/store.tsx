import {applyMiddleware, createStore} from "redux";
import {appReducer} from "./reducer";
import thunk from "redux-thunk";

export const appStore = createStore(appReducer, applyMiddleware(thunk));
