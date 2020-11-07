import * as React from "react";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppState} from "./reducer";
import {Action} from "redux";

type AsyncActionReturn = Promise<any> | void;
export type AsyncAction = ThunkAction<AsyncActionReturn, IAppState, any, Action<any>>;
export type AppDispatch = ThunkDispatch<IAppState, any, Action<any>>;
