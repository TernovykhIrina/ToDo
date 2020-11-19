import {Task} from "./components/taskManager/AddTask";

interface IFakeState{
    tasks: Array<Task>,
}

const dbState: IFakeState = {
    tasks: [{taskId: 1, taskName: "Первая задача"},
        {taskId: 2, taskName: "Вторая задача"},
        {taskId: 3, taskName: "Третья задача"}
    ],
};

const loadAllTasks = () => {
    return [...dbState.tasks];
};

const deleteTask = (taskId: number) => {
    dbState.tasks = dbState.tasks.filter(tsk => tsk.taskId != taskId);
}

const saveNewTask = (task: Task) => {
    dbState.tasks = [...dbState.tasks, {...task}];
}

const mapping: any = {
    "loadAllTasks": loadAllTasks,
    "deleteTask": deleteTask,
    "saveNewTask": saveNewTask,
}

export const serverRequest = (callback: any, url: string, ...params: Array<any>) => {
    setTimeout(() => {
        console.log(`url: ${url}, params: ${JSON.stringify(params)}`);
            callback ? callback(mapping[url](...params)) : mapping[url](...params);
        },
        200
    )
}

