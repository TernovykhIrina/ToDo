import * as React from "react";
import {ChangeEvent, useState} from "react";
import styles from './addTask.module.css'

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
            <tr key={task.taskId}>
                <td>{task.taskName}</td>
                <button onClick={() => deleteTask(task.taskId)}>del</button>
            </tr>
                )
        }
    </>
    || <></>
;