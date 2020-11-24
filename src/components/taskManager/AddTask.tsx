import * as React from "react";
import {ChangeEvent, useState} from "react";
import styles from './addTask.module.css'

export interface Task {
    taskId: number;
    taskName: string;
    isDone: boolean;
    priority: number;
}

interface Events {
    saveNewTask(task: Task): void;
}

export const AddTask: React.FC<Events> = ({saveNewTask}) => {
    const [name, setName] = useState("");

    function saveButtonClickHandler() {
        if (name === "") {
            alert("Поле добавления задач не заполнено. Введите задачу.");
        } else {
            saveNewTask({taskId: 0, taskName: name, isDone: false, priority: 0});
            setName("");
        }
    }

    const buildHandler = (setter: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    };

    return (
        <div className={styles.container_add_task}>
            <input
                className={styles.task_input}
                type="text"
                placeholder={"Введите задачу"}
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