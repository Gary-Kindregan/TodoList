import React, { useState } from 'react';
import './Subtask.css'

function Subtask(props) {

    const [taskname, setTaskname] = useState(props.subtask.taskname)
    const [editting, setEditting] = useState(false)

    const editSubtask = () => {
        setEditting(true)
    }

    const confirmEdit = () => {
        setEditting(false)
        
        const edittedTasks = [...props.subtasks].map((task) => {
            if(task.id === props.subtask.id) {
                task.taskname = taskname
            }
            return task
        })
        console.log("Editted Tasks", edittedTasks)
        props.setSubtasks(edittedTasks)
        console.log("Tasks after Editting", props.subtasks)
    }

    const deleteSubtask = () => {
        const newTasks = props.subtasks.filter((task) => task.id !== props.subtask.id)

        console.log("New Tasks", newTasks)
        props.setSubtasks(newTasks)
        console.log("Tasks after Delete", props.subtasks)
    }

    return (
        <div className="SubTask">
            {!editting ? 
            <div>
                <p>{taskname}</p>
                <button onClick={editSubtask}>Edit</button>
                <button onClick={deleteSubtask}>Completed</button>
            </div>
            :
            <div>
                <input
                    type="text"
                    placeholder="Edit Subtask..."
                    onChange={evt => setTaskname(evt.target.value)}
                ></input>
                <button onClick={confirmEdit}>Confirm</button>
            </div>
            }     
        </div>
    )
}

export default Subtask;