import React from 'react'
import { Todo } from '../interfaces/Todo'

type TodoProps = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const List = ({ todos, setTodos }: TodoProps) => {
    function checkboxOnChange(todoId: number) {
        let newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.complete = !todo.complete
            }
            return todo;
        })
        setTodos(newTodos);

        console.log(todos)
    }

    let btnStyle: React.CSSProperties | undefined = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    let listStyle = (completed: boolean): React.CSSProperties | undefined => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        }
    }

    let removeOnClick = (todoId: number) => {
        let newTodos = todos.filter(todo => todo.id !== todoId)

        setTodos([...newTodos])
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} style={listStyle(todo.complete)}>
                    <input
                        type="checkbox"
                        onChange={() => checkboxOnChange(todo.id)}
                        defaultChecked={todo.complete} />
                    {todo.title}
                    <button
                        style={btnStyle}
                        onClick={() => removeOnClick(todo.id)}>X</button>
                </div>
            ))}
        </div>
    )
}
