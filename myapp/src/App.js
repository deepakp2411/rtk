import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  
  return (
    <>
      <div>
        <h1>Hey Redux Toolkit</h1>
        <TaskForm />
        <TaskList />
      </div>
    </>
  )
}

export default App