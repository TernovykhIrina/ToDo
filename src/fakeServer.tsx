import {Task} from "./components/taskManager/AddTask";

interface IFakeState{
    tasks: Array<Task>,
}

const dbState: IFakeState = {
    tasks: [],
};

const loadAllTasks = () => {
    console.log(dbState.tasks);
    return [...dbState.tasks];
};

const deleteTask = (taskId: number) => {
    dbState.tasks = dbState.tasks.filter(tsk => tsk.taskId !== taskId);
}

let taskIdGenerator=0;

const saveNewTask = (task: Task) => {
    const nextId: number = ++taskIdGenerator;
    const newTask: Task = {taskId: nextId, taskName: task.taskName, isDone: task.isDone, priority: task.priority};
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

const changeIsDone = (taskId: number) => {
    dbState.tasks = dbState.tasks.map(tsk => {
        if (tsk.taskId !== taskId) {
            return tsk;
        }
        return {...tsk, isDone: true}
    })
}

const mapping: any = {
    "loadAllTasks": loadAllTasks,
    "deleteTask": deleteTask,
    "saveNewTask": saveNewTask,
    "editTask": editTask,
    "changeIsDone": changeIsDone,
}

export const serverRequest = (callback: any, url: string, ...params: Array<any>) => {
    setTimeout(() => {
        console.log(`url: ${url}, params: ${JSON.stringify(params)}`);
            callback ? callback(mapping[url](...params)) : mapping[url](...params);
        },
        100
    )
}

