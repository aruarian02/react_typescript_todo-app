import React from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Todo } from "./interfaces/Todo";


function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: 1,
      title: "공부하기",
      complete: true
    },
    {
      id: 2,
      title: "빨래하기",
      complete: false
    },
  ])



  return (
    <div>
      <List todos={todos} setTodos={setTodos} />
      <Form todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
