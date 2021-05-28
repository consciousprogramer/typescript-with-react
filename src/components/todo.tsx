import TodoItem from "./todoItem"
import { FC } from 'react'
import todo from '../models/todo'
import React from "react"


const Todo: FC<{ todoTasks: todo[], removeTodo: (id: string | number) => void }> = ({ todoTasks, removeTodo }) => {
    return (
        <ol>
            {todoTasks.map(todo => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
        </ol>
    )
}

export default Todo