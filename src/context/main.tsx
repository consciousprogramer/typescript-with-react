import React, { createContext, useState } from 'react';
import todo from '../models/todo'


// this is my local newfeature

//this is the custom type alis created for todocontext 
type todoContextType = {
    todo: todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string | number) => void,
    newFeature: String[]
}

const todoContext = createContext<todoContextType>({
    todo: [],
    addTodo: (text) => { },
    removeTodo: (id) => { },
    newFeature: []
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
        removeTodo: removeTodo,
        newFeature: ["this is a new feature"]
    }

    return (
        <todoContext.Provider value={contextValues}>
            {props.children}
        </todoContext.Provider>
    )
}

export default todoContextProvider