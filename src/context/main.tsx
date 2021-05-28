import React, { createContext, useState } from 'react';
import todo from '../models/todo'


// this is my local newfeature

type todoContextType = {
    todo: todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string | number) => void
}

const todoContext = createContext<todoContextType>({
    todo: [],
    addTodo: (text) => { },
    removeTodo: (id) => { }
})

// const todoContextProvider: React.FC<{}> = (props) => {
const todoContextProvider: React.FC<{}> = (props) => {
    const [todoTasks, setTodoTasks] = useState<todo[]>([])

    const addTodo = (text: string) => {
        setTodoTasks(prevValue => [...prevValue, new todo(text)])
    }

    const removeTodo = (id: string | number) => {
        setTodoTasks(prevValue => prevValue.filter(item => item.id !== id))
    }

    const contextValues = {
        todo: todoTasks,
        addTodo: addTodo,
        removeTodo: removeTodo
    }

    return (
        <todoContext.Provider value={contextValues}>
            {props.children}
        </todoContext.Provider>
    )
}

export default todoContextProvider