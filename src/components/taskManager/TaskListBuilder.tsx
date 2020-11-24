import * as React from "react";
import {useEffect} from "react";
import {Task} from "./AddTask";
import {TaskRowBuilder} from "./TaskRowBuilder";
import styles from './taskListBuilder.module.css'

interface Props {
    entities: Array<Task>;
}

interface Events {
    loadAllTasks(): void;

    deleteTask(taskId: number): void;

    editTask(task: Task): void;

    changeIsDone(taskId: number): void;
}

export const TaskListBuilder: React.FC<Events & Props> = ({loadAllTasks, deleteTask, editTask, changeIsDone, entities}) => {
    useEffect(loadAllTasks, []);

    return (
        <div className={styles.task_list}>
            <TaskRowBuilder deleteTask={deleteTask}
                            editTask={editTask}
                            changeIsDone={changeIsDone}
                            taskList={entities}/>
        </div>
    )
};