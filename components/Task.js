import React, { useState } from 'react';
import Subtask from './Subtask'
import './Task.css'

function Task(props) {
    const [subtask, setSubtask] = useState("")
    const [subtasks, setSubtasks] = useState([])

    const addSubtask = () => {

        const taskToAdd = {
          id: Date.now(),
          taskname: subtask,
        }
    
        setSubtasks([...subtasks].concat(taskToAdd))
      }

    const deleteTask = () => {
        let newTasks = props.tasks.filter((task) => task.id !== props.task.id)
        props.setTasks(newTasks)
    }

    return (
        <div className="TaskCard">
                <div className="TaskHeader">
                    <h2>{props.task.taskname}</h2>
                    <label htmlFor="addSubTask">Add a Subtask: </label>
                    <input 
                        type="text" 
                        name="addSubTask" 
                        id="addSubTask" 
                        placeholder="Add a Subtask..."
                        onChange={evt => setSubtask(evt.target.value)}
                    ></input>

                    <button onClick={addSubtask}>Add Subtask</button>
                </div>
                
            <div className = "SubTasks">
                {subtasks.length ? 
                    subtasks.map((subtask) => <Subtask key={subtasks.indexOf(subtask)} subtask={subtask} subtasks={subtasks} setSubtasks={setSubtasks}/>)
                : 
                <p>No Subtasks Added</p>}
            </div>

            <button onClick={deleteTask}>Completed {props.task.taskname}</button>
        </div>
    )
}

export default Task;