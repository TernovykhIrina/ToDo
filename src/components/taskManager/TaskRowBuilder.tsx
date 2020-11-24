import * as React from "react";
import {useState} from "react";
import styles from './taskRowBuilder.module.css'
import {Task} from "./AddTask";
import {TextRow} from "./TextRow";

interface Events {
    deleteTask(taskId: number): void;

    editTask(task: Task): void;

    changeIsDone(taskId: number): void;
}

interface Props {
    taskList: Array<Task>;
}

export const TaskRowBuilder: React.FC<Events & Props> = ({deleteTask, editTask, changeIsDone, taskList}) => {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

    return (
        taskList && taskList.length !== 0 &&
        <>
            {
                taskList.map(task =>
                    <div className={styles.list_row} key={task.taskId}>
                        <TextRow task={task}
                                 editTask={editTask}
                                 isEdit={editingTaskId ? task.taskId == editingTaskId : false}
                                 setEditingTaskId={setEditingTaskId}
                        />
                        <div className={styles.buttons_box}>
                            <button className={styles.button_done}
                                    onClick={() => changeIsDone(task.taskId)}>
                            </button>
                            <button className={styles.button_del}
                                    onClick={() => deleteTask(task.taskId)}>
                            </button>
                        </div>
                    </div>
                )
            }
        </>
        || <div className={styles.background_text}> У Вас нет ни одной задачи</div>
    )
}

