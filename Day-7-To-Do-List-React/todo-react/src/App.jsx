import { useState } from 'react'
import TodoInput from './TodoInput'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  function handleAddTask (taskName) {
    const newTask = { id: Date.now(), text: taskName, completed: false }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <TodoInput onAddTask={handleAddTask} />
    </>
  )
}

export default App
