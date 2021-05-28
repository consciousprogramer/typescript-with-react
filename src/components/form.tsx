import React, { useRef } from 'react';
import classes from "./form.module.css"

const Form: React.FC<{ addTodo: (text: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(inputRef.current!.value)
        props.addTodo(inputRef.current!.value)
    }
    return (
        <div className={classes.form}>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="task">Enter New Task</label>
                <input type="text" name="task" id="task" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form