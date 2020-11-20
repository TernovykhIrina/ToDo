import * as React from "react";
import {ChangeEvent, useState} from "react";
import styles from './taskRowBuilder.module.css'

export interface Task {
    taskId: number;
    taskName: string;
}

interface Events {
    deleteTask(taskId: number): void;
}
interface Props {
    taskList: Array<Task>;
}

export const TaskRowBuilder: React.FC<Events & Props> = ({deleteTask, taskList}) =>
    taskList &&
    <>
        {
            taskList.map(task =>
            <div className={styles.listRow} key={task.taskId}>
                <div>{task.taskName}</div>
                <button onClick={() => deleteTask(task.taskId)}>del</button>
            </div>
                )
        }
    </>
    || <></>
;