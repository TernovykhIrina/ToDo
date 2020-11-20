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
}

export const TaskListBuilder: React.FC<Events & Props> = ({loadAllTasks, deleteTask, entities}) => {
    useEffect(loadAllTasks, [])

    return (
        <div className={styles.task_list}>
            <TaskRowBuilder deleteTask={deleteTask} taskList={entities}/>
        </div>
    )
};