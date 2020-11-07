import {AppDispatch, AsyncAction} from "./actionsts";
import {Task} from "../components/taskManager/AddTask";
import {serverRequest} from "../fakeServer";

export const loadAllTasks = (): AsyncAction => (dispatch: AppDispatch) => {
    serverRequest(processResponse, "loadAllTasks", null);
    function processResponse(response: Array<Task>) {
        dispatch({type: 'load_all_tasks', response});
    }
};

export const saveNewTask = () => {
};

export const deleteTask = () => {
};

