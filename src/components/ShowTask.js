import { useState } from "react";

export const ShowTask = ({tasklist, setTasklist, editTask, setEditTask}) => {

  const handleDelete = (taskId)=>{
    const updatedTasklist = tasklist.filter((task)=> task.id !== taskId);
    setTasklist(updatedTasklist);
  };

  const handleEdit = (taskId)=>{
    tasklist.filter((task)=> (task.id === taskId) && setEditTask({id:task.id, taskname:task.taskname, time:task.time}));
  }

  
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={()=>{setTasklist([])}}>Clear All</button>
      </div>

      <ul>
        {tasklist.map((task)=>(
          <li key={task.id}>
            <p>
              <span className="name">{task.taskname}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={()=>handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={()=>handleDelete(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
    
  )
}