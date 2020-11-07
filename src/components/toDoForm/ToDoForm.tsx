import * as React from "react";
import styles from './toDoForm.module.css'
import {AddTask, Task} from "../taskManager/AddTask";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteTask, loadAllTasks, saveNewTask} from "../../redux/actions";
import {TaskListBuilder} from "../taskManager/TaskListBuilder";
import {IAppState} from "../../redux/reducer";

interface Events {
    loadAllTasks(): void;

    saveNewTask(task: Task): void;

    deleteTask(task: Task): void;
}

interface Props {
    entities: Array<Task>;
}

const Form: React.FC<Events & Props> = ({saveNewTask, loadAllTasks, entities}) => {

    return (
        <div className={styles.container}>
            yo!
            <AddTask saveNewTask={saveNewTask}/>
            <TaskListBuilder loadAllTasks={loadAllTasks} entities={entities}/>
        </div>
    )
};

export const ToDoForm = connect(
    (state: IAppState) => ({
        entities: state.tasks.entities
    }),
    (dispatch): Events => bindActionCreators({loadAllTasks, saveNewTask, deleteTask}, dispatch)
)(Form);