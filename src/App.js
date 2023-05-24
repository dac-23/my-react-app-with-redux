import { useState } from "react";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

function Todo() {
  let [list, setList] = useState([]);
  let [todo, setTodo] = useState("");

  let inputTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  let addTodoToDb = async () => {
    let url = "http://localhost:4000/addtodo";

    let data = {
      message: todo,
    };

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodo("");
    // alert("Todo Added");
    getTodos();
  };

  let getTodos = async () => {
    let url = "http://localhost:4000/";
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    setList(data);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Addo Todo"
        value={todo}
        onChange={inputTodoHandler}
      />
      <input type="button" value="Add Todo" onClick={addTodoToDb} />
      <input type="button" value="GET TODOS" onClick={getTodos} />
      <hr />

      {list.map((item, index) => (
        <div key={index} className="alert alert-primary">
          {item.message}
        </div>
      ))}
    </div>
  );
}

export default App;
