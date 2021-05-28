import React, { useState } from 'react';
import Todo from './components/todo'
import Form from './components/form'
import todo from './models/todo'
import NewFeature from './components/Newfeature'

function App() {
  const [todoTasks, setTodoTasks] = useState<todo[]>([])

  const addTodo = (text: string) => {
    setTodoTasks(prevValue => [...prevValue, new todo(text)])
  }
  const removeTodo = (id: string | number) => {
    setTodoTasks(prevValue => prevValue.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <Todo todoTasks={todoTasks} removeTodo={removeTodo} />
      <NewFeature />
    </div>
  );
}

export default App;
