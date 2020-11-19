import {Task} from "../../components/taskManager/AddTask";

const initialState = {
    entities: [],
}

export interface ITasks {
    entities: Array<Task>,
}

export const tasks = (state: ITasks = initialState, action: any): ITasks => {
    const {type, response} = action;
    switch (type) {
        case 'load_all_tasks':
            return {
                ...state,
                entities: response as Array<Task>,
            };
        default:
            return state;
    }
};