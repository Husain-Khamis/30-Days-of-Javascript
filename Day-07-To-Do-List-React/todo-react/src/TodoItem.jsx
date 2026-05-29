import { useState } from "react";

function TodoItem ({ task, onDelete, onComplete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)
    return (
    <div className="card">
        {isEditing ? (
        <>
            <input value={editText} onChange={(e) => setEditText(e.target.value)} />
            <button onClick={() => {
                console.log('save clicked', task.id, editText)
                onEdit(task.id, editText)
                setIsEditing(false)
            }}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
        ) : (
            <p className={task.completed ? 'completed' : ''}>{task.text}</p>
        )}
        <div className="button-group">
            <button className="buttons" onClick={() => onComplete(task.id)}>Complete</button>
            <button className="buttons" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="buttons" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    </div>
    )
}

export default TodoItem