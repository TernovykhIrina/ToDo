import {Task} from "./components/taskManager/AddTask";

interface IFakeState{
    tasks: Array<Task>,
}

const dbState: IFakeState = {
    tasks: [],
};

const loadAllTasks = () => {
    return [...dbState.tasks];
};

const deleteTask = (taskId: number) => {
    dbState.tasks = dbState.tasks.filter(tsk => tsk.taskId !== taskId);
}

const saveNewTask = (task: Task) => {
    const nextId: number = dbState.tasks[dbState.tasks.length-1]? dbState.tasks[dbState.tasks.length-1].taskId + 1 : 0;
    const newTask: Task = {taskId: nextId, taskName: task.taskName};
    dbState.tasks = [...dbState.tasks, {...newTask}];
}

const editTask = (task: Task) => {
    dbState.tasks = dbState.tasks.map(tsk => {
        if (tsk.taskId !== task.taskId) {
            return tsk;
        }
        return {...tsk, taskName: task.taskName}
    });
}

const mapping: any = {
    "loadAllTasks": loadAllTasks,
    "deleteTask": deleteTask,
    "saveNewTask": saveNewTask,
    "editTask": editTask,
}

export const serverRequest = (callback: any, url: string, ...params: Array<any>) => {
    setTimeout(() => {
        console.log(`url: ${url}, params: ${JSON.stringify(params)}`);
            callback ? callback(mapping[url](...params)) : mapping[url](...params);
        },
        200
    )
}

