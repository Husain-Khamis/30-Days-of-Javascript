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
        <>
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a task!"
            />
            <button onClick={handleSubmit}>Add a Task!</button>
        </>
    )
}

export default TodoInput