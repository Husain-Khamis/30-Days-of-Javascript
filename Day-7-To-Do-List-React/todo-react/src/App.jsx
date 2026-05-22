import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './App.css'
import FilterBar from './FilterBar'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const remainingCount = tasks.filter(task => !task.completed).length

  function handleAddTask (taskName) {
    const newTask = { id: Date.now(), text: taskName, completed: false }
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleCompleteTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        console.log('found task, toggling to:', !task.completed)
        return {...task, completed: !task.completed}
      }
      return task
    }))
  }

  function handleEditTask (id, text){
    setTasks(tasks.map(task => 
      task.id === id ? {...task, text: text } : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
  })

  return (
    <div className="top-section">
      <h1>My To-Do List</h1>
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TodoInput onAddTask={handleAddTask} />
      <p>{remainingCount} Tasks Remaining!</p>
      <TodoList tasks={filteredTasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} onEdit={handleEditTask} />
    </div>
  )
}

export default App
