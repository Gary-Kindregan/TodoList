import React, { useState } from 'react';
import Task from './Task'

function TodoMaker(props) {
  
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    const taskToAdd = {
      id: Date.now(),
      taskname: task
    }

    setTasks([...tasks].concat(taskToAdd))
  }

  return (
      <div>
        <h1>Todoist.</h1>

        <div>
          <label htmlFor="addTask">Create A Todo List: </label>
            <input 
                type="text" 
                name="addTask" 
                id="addTask" 
                placeholder="Add a Task..."
                onChange={evt => setTask(evt.target.value)}
            ></input>

            <button onClick={addTask}>Add Task</button>
        </div>

        {tasks.length ?
            
          tasks.map((task) => <Task key={tasks.indexOf(task)} task={task} tasks={tasks} setTasks={setTasks}/>)
        : 
          <p>No Tasks Added</p>}
        <br></br>
        <button onClick={props.loginToggler}>Logout</button>
      </div>
  )
}

export default TodoMaker;