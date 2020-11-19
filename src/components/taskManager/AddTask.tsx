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
    const [id, setId] = useState();
    const [name, setName] = useState("");

    function saveButtonClickHandler() {
        saveNewTask({taskId: 4, taskName: name});
        setName("");
    }

    const buildHandler = (setter: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    };

    return (
        <div className={styles.container}>
            <label className={styles.box1}>
                Add task
                <input
                className={styles.input}
                type="text"
                value={name}
                onChange={buildHandler(setName)}
                />
            </label>
            <button
                className={styles.button}
                onClick={saveButtonClickHandler}
                >
                Save
            </button>
        </div>
    )
}