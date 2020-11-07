import {Task} from "./components/taskManager/AddTask";

interface IFakeState{
    tasks:Array<Task>
}

const dbState: IFakeState = {
    tasks: [{taskId: 1, taskName: "Первая задача"},
        {taskId: 2, taskName: "Вторая задача"}
    ],
};


const loadAllTasks = () => {
    return dbState.tasks;
};

const mapping: any = {
    "loadAllTasks": loadAllTasks,
}

export const serverRequest = (callback: any, url: string, ...params: Array<any>) => {
    setTimeout(() => {
            callback && callback(mapping[url](params)) || mapping[url](params);
        },
        500
    )
}

