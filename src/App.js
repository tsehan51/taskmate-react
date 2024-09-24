import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';


function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [editTask, setEditTask] = useState({});

  useEffect(()=>{
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist} editTask={editTask} setEditTask={setEditTask} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} editTask={editTask} setEditTask={setEditTask} />
    </div>
  );
}

export default App;


