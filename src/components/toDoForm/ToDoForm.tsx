import * as React from "react";
import styles from './toDoForm.module.css'
import {AddTask, Task} from "../taskManager/AddTask";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeIsDone, deleteTask, editTask, loadAllTasks, saveNewTask} from "../../redux/actions";
import {TaskListBuilder} from "../taskManager/TaskListBuilder";
import {IAppState} from "../../redux/reducer";

interface Events {
    loadAllTasks(): void;

    saveNewTask(task: Task): void;

    deleteTask(taskId: number): void;

    editTask(task: Task): void;

    changeIsDone(taskId: number): void;
}

interface Props {
    entities: Array<Task>;
}

const Form: React.FC<Events & Props> = ({saveNewTask, loadAllTasks, deleteTask, editTask, changeIsDone, entities}) => {

    return (
        <div className={styles.container}>
            <AddTask saveNewTask={saveNewTask}/>
            <TaskListBuilder loadAllTasks={loadAllTasks} deleteTask={deleteTask} editTask={editTask}
                             changeIsDone={changeIsDone} entities={entities}/>
        </div>
    )
};

export const ToDoForm = connect(
    (state: IAppState) => ({
        entities: state.tasks.entities
    }),
    (dispatch): Events => bindActionCreators({loadAllTasks, saveNewTask, deleteTask, editTask, changeIsDone}, dispatch)
)(Form);