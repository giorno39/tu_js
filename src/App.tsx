import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { taskReducer, State } from './interface/Task';
import { ListSection } from './components/List/ListSection';
import { DetailsSection } from './components/Details/DetailsSection';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

  const initialState: State = {
    tasks: [
      {
        id: 1,
        description: "The Lord of the Rings",
        assignee: "J.R.R. Tolkien",
        status: "Available",
        priority: 1,
        dueDate: new Date(),
      },
      {
        id: 2,
        description: "The Hobbit",
        assignee: "J.R.R. Tolkien",
        status: "Available",
        priority: 2,
        dueDate: new Date(),
      },
    ],
  };

  const [state, dispatch] = React.useReducer(taskReducer, initialState);
  console.log(state);

  const [selectedTaskId, setSelectedTaskId] = React.useState<number | null>(null);

  return (
    <div className="App">
      <NavBar />

      <ListSection
        dispatch={dispatch}
        tasks={state.tasks}
        selectedTaskId={selectedTaskId}
        setSelectedTaskId={setSelectedTaskId} />

      <DetailsSection
        dispatch={dispatch}
        selectedTask={selectedTaskId !== null ? state.tasks.find(task => task.id === selectedTaskId) : null}
      />
      <Footer />
    </div>
  );
}

export default App;
