import {AppDispatch, AsyncAction} from "./actionsts";
import {Task} from "../components/taskManager/AddTask";
import {serverRequest} from "../fakeServer";

export const loadAllTasks = (): AsyncAction => (dispatch: AppDispatch) => {
    serverRequest(processResponse, "loadAllTasks", null);
    function processResponse(response: Array<Task>) {
        console.log(response);
        dispatch({type: 'load_all_tasks', response});
    }
};

export const saveNewTask = (task: Task): AsyncAction => (dispatch:AppDispatch) => {
    serverRequest(callback, "saveNewTask", task);
    function callback() {
        dispatch(loadAllTasks());
    }
};

export const editTask = (task: Task): AsyncAction => (dispatch:AppDispatch) => {
    serverRequest(callback, "editTask", task);
    function callback() {
        dispatch(loadAllTasks());
    }
}

export const deleteTask = (taskId: number): AsyncAction => (dispatch:AppDispatch) => {
    serverRequest(callback, "deleteTask", taskId);
    function callback() {
        dispatch(loadAllTasks());
    }
};

