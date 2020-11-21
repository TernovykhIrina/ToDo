import * as React from "react";
import {ChangeEvent, useState} from "react";
import styles from './taskRowBuilder.module.css'

export interface Task {
    taskId: number;
    taskName: string;
}

interface Events {
    deleteTask(taskId: number): void;
    editTask(task: Task): void;
}
interface Props {
    taskList: Array<Task>;
}

export const TaskRowBuilder: React.FC<Events & Props> = ({deleteTask, editTask, taskList}) =>
    taskList && taskList.length !== 0 &&
    <>
        {
            taskList.map(task =>
                <div className={styles.list_row} key={task.taskId}>
                    <div className={styles.task_name}>{task.taskName}</div>
                    <div className={styles.buttons_box}>
                        <button>done</button>
                        <button onClick={() => editTask({taskName: "Edited task", taskId: task.taskId})}>edit</button>
                        <button onClick={() => deleteTask(task.taskId)}>del</button>
                    </div>
                </div>
            )
        }
    </>
    || <div className={styles.background_text}> У Вас нет ни одной задачи</div>
;