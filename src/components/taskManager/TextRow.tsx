import * as React from "react";
import {ChangeEvent, useState} from "react";
import {Task} from "./AddTask";
import styles from "./textRow.module.css";
import cn from "classnames";


interface TextRowProps {
    task: Task,

    editTask(task: Task): void,

    isEdit: boolean,

    setEditingTaskId(taskId: number | null): void
}

export const TextRow: React.FC<TextRowProps> = ({task, editTask, isEdit, setEditingTaskId}) => {
    const [name, setName] = useState(task.taskName);

    const buildHandler = (setter: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    };

    function editButtonHandler(task: Task) {
        setEditingTaskId(task.taskId);
    }

    function saveEditingTaskButtonHandler(task: Task) {

        editTask({...task, taskName: name});
        setEditingTaskId(null);
    }

    if (isEdit) {
        return (
            <div className={styles.text_row_box}>
                <button className={styles.button_save}
                        onClick={() => saveEditingTaskButtonHandler(task)}>
                </button>
                <input
                    className={styles.edit_input}
                    value={name}
                    onChange={buildHandler(setName)}/>
            </div>
        )
    } else
        return (
            <div className={styles.text_row_box}>
                <button className={styles.button_edit}
                        onClick={() => editButtonHandler(task)}>
                </button>
                <div className={cn(styles.task_name, {[styles.task_name_done]: task.isDone})}>{task.taskName}</div>
            </div>)
};
