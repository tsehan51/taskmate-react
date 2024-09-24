import { useState } from "react"

export const AddTask = ({tasklist, setTasklist, editTask, setEditTask}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    const date = new Date();

    if(editTask.id){
      const editedTask = {id: editTask.id, taskname:editTask.taskname, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
      const updatedTasklist = tasklist.map((t)=>t.id === editTask.id ? editedTask:t);
      setTasklist(updatedTasklist);
    }else{
      /*Add task in object form*/
      const newTask = {
        id: date.getTime(),
        taskname: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
    }
    setEditTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" value={editTask.taskname || ""} onChange={e=> setEditTask({...editTask, taskname: e.target.value})} name="task" autoComplete="off" placeholder="add task" maxLength="25"/>
        <button type="submit">
          {editTask.id ? "Update":"Add"}
        </button>
      </form>
    </section>
    
  )
}

