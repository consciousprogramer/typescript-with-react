import React from 'react';
import todo from "../models/todo"

const todoItem: React.FC<{ todo: todo, removeTodo: (id: string | number) => void }> = (props) => {
    return (
        <li onClick={(_event: React.MouseEvent) => props.removeTodo(props.todo.id)} style={{ padding: "2rem 0.8rem", borderRadius: 8, margin: "1rem", boxShadow: "3px 2px 5px 1px rgb(210,210,210)" }}>
            {props.todo.text}
        </li>
    )
}

export default todoItem