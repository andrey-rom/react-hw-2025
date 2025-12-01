import React from "react";
import "./StaticList.css";

class StaticList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "First Task" },
        { id: 2, text: "Second Task" },
        { id: 3, text: "Third Task" },
        { id: 4, text: "Fourth Task" },
        { id: 5, text: "Fifth Task" },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <ul className="todo-list">
          {this.state.todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StaticList;
