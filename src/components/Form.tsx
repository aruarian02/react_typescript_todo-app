import React from 'react'
import { Todo } from '../interfaces/Todo'

type TodoProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Form = ({ todos, setTodos }: TodoProps) => {
    const [value, setValue] = React.useState<string>("");


    function valueOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    function inputTodoOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


        setTodos([...todos, { id: Date.now(), title: value, complete: false }])
        setValue("")
    }

    return (
        <form style={{ display: "flex" }} onSubmit={inputTodoOnSubmit} >
            <input
                name="value"
                type="text"
                style={{ flex: "10", padding: "5px" }}
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={valueOnChange}
            />
            <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
        </form>
    )
}
