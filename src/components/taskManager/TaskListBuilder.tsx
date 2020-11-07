import * as React from "react";
import {useEffect} from "react";
import {Task} from "./AddTask";

interface Props {
    entities: Array<Task>;
}
interface Events {
    loadAllTasks(): void;
}
export const TaskListBuilder: React.FC<Events & Props> = ({loadAllTasks, entities}) => {
    useEffect(loadAllTasks, [])

    return (
        <table>
            <tbody>
            {
                entities.map((task) =>
                <tr key={task.taskId}>
                    <td>{task.taskName}</td>
                </tr>
                )
            }
            </tbody>
        </table>
    )
};