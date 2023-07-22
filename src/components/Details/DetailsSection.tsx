import * as React from "react";
import { Task, TaskAction } from "../../interface/Task";
import "./details.css";

interface DetailsProps {
  dispatch: React.Dispatch<TaskAction>;
  selectedTask: Task | null | undefined;
}

export const DetailsSection: React.FC<DetailsProps> = ({
  dispatch,
  selectedTask,
}) => {
  const [task, setTask] = React.useState({
    id: 0,
    description: "",
    assignee: "",
    status: "",
    priority: 0,
    dueDate: new Date(),
  });

  React.useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      clearForm();
    }
  }, [selectedTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: selectedTask ? "UPDATE_TASK" : "ADD_TASK",
      payload: task,
    });
  };

  function clearForm() {
    setTask({
      id: 0,
      description: "",
      assignee: "",
      status: "",
      priority: 0,
      dueDate: new Date(),
    });
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      dueDate: new Date(e.target.value),
    });
  };

  return (
    <section className="content-details">
      <form onSubmit={handleOnSubmit} className="form-class">
        <label htmlFor="description">Title</label>
        <input
          required
          type="text"
          name="description"
          id="field1"
          value={task.description}
          onChange={handleChange}
        />
        <label htmlFor="assignee">Author</label>
        <input
          required
          type="text"
          name="assignee"
          id="field2"
          value={task.assignee}
          onChange={handleChange}
        />
        <label htmlFor="status">ISBN</label>
        <input
          required
          type="text"
          name="status"
          id="field3"
          value={task.status}
          onChange={handleChange}
        />
        <label htmlFor="priority">Price</label>
        <input
          required
          type="number"
          name="priority"
          id="field4"
          value={task.priority}
          onChange={handleChange}
        />
        <label htmlFor="dueDate">Publication Date</label>
        <input
          required
          type="date"
          name="dueDate"
          id="field5"
          value={
            task.dueDate instanceof Date
              ? task.dueDate.toISOString().split("T")[0]
              : ""
          }
          onChange={handleDateChange}
        />
        <button type="submit" id="saveButton">
          Save
        </button>
        <button type="button" id="clearButton" onClick={clearForm}>
          Clear
        </button>
      </form>
    </section>
  );
};
