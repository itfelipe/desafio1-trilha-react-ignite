import { useState } from 'react'
import Alert from 'react'
import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    
    if(newTaskTitle){
      const data = {
        id: Math.random(),
        title: newTaskTitle,
        isComplete:false
    }
     setTasks(value =>[...value, data])
         
      
    
    }
    else{
      alert("Cannot add a task without a title")
    }
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    const markedTasks = tasks.map(tasks => tasks.id === id ?{
        ...tasks,
        isComplete: !tasks.isComplete
    } : tasks)    
    setTasks(markedTasks)
  }

  function handleRemoveTask(id: number) {
    const nonRemovedTasks = tasks.filter(tasks => tasks.id !== id)
    setTasks(nonRemovedTasks)
  }
  function removeMarkedTasks(id: number) {
    const markedRemovedTasks = tasks.filter(tasks => tasks.isComplete === false)
    setTasks(markedRemovedTasks)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>My tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Add new todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
          <button type="submit" data-testid="remove-marked-tasks" onClick={removeMarkedTasks}>
            <FiCheckSquare size={16} color="red"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
              
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}