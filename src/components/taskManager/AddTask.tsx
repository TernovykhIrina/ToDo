import * as React from "react";
import {ChangeEvent, useState} from "react";
import styles from './addTask.module.css'

export interface Task {
    taskId: number;
    taskName: string;
}

interface Events {
    saveNewTask(task: Task): void;
}

export const AddTask: React.FC<Events> = ({saveNewTask}) => {
    const [name, setName] = useState("");

    function saveButtonClickHandler() {
        saveNewTask({taskId: 0, taskName: name});
        setName("");
    }

    const buildHandler = (setter: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    };

    return (
        <div className={styles.container_add_task}>
                <input
                className={styles.input}
                type="text"
                value={name}
                onChange={buildHandler(setName)}
                />
            <button
                className={styles.button}
                onClick={saveButtonClickHandler}
                >
                Add
            </button>
        </div>
    )
}