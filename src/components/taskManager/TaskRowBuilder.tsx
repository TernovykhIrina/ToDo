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
                <div className={styles.list_row} key={task.taskId}>
                    <div className={styles.task_name}>{task.taskName}</div>
                    <div className={styles.buttons_box}>
                        <button>done</button>
                        <button>edit</button>
                        <button onClick={() => deleteTask(task.taskId)}>del</button>
                    </div>
                </div>
            )
        }
    </>
    || <></>
;