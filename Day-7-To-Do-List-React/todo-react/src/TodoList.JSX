import TodoItem from './TodoItem'

function TodoList({ tasks, onDelete, onComplete, onEdit }) {
  return (
    <div className="task-list">
    {tasks.length === 0 ? <p>You have no Tasks!</p> : tasks.map(task => (
    <TodoItem key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} onEdit={onEdit} />))} 
    </div>
  )
}

export default TodoList