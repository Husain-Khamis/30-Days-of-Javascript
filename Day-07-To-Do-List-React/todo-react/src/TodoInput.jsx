import { useState } from 'react'

function TodoInput({ onAddTask }) {
    const [taskName, setTaskName] = useState('')

    function handleSubmit() {
        if (taskName.length === 0){
            return
        }
        onAddTask(taskName)
        setTaskName('')
    }

    return (
        <div className="task-input-row">
            <input
                className="input-task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : null}
                placeholder="Add a task!"
            />
            <button className="add-task" onClick={handleSubmit}>Add a Task!</button>
        </div>
    )
}

export default TodoInput