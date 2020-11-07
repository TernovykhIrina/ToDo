import {combineReducers} from "redux";
import {ITasks, tasks} from "./tasks";

export interface IAppState {
    tasks: ITasks;
}

export const appReducer = combineReducers<IAppState>({
    tasks,
});