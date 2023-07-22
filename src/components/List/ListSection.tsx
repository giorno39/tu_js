import * as React from "react";
import { Task, TaskAction } from "../../interface/Task";
import "./list.css";

interface ListProps {
  dispatch: React.Dispatch<TaskAction>;
  tasks: Task[];
  selectedTaskId: number | null;
  setSelectedTaskId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ListSection: React.FC<ListProps> = ({
  dispatch,
  tasks,
  selectedTaskId,
  setSelectedTaskId,
}: ListProps) => {
  const deleteTask = (task: Task) => {
    dispatch({
      type: "DELETE_TASK",
      payload: task,
    });

    if (selectedTaskId === task.id) {
      setSelectedTaskId(null);
    }
  };

  return (
    <section className="content-list">
      <ul className="item-list">
        {tasks?.map((task) => (
          <li key={task.id} onClick={() => setSelectedTaskId(task.id)}>
            <p className="id">{task.id}</p>
            <p className="field1">{task.description}</p>
            <p className="field2">{task.assignee}</p>
            <p className="field3">{task.status}</p>
            <p className="field4">{task.priority}</p>
            <p className="field5">{task.dueDate.toString()}</p>
            <button className="deleteButton" onClick={() => deleteTask(task)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
