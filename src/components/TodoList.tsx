import React from "react";
import ITodo from "../interfaces";
// ! ключевые параметры
type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};
const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return (
      <p
        className="center"
        style={{ color: "white", fontSize: "2rem", fontWeight: 700 }}
      >
        {" "}
        Пока дел нет
      </p>
    );
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        // {console.log(todo.id)}
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label className="lab">
              <input
                type="checkbox"
                // checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              {/* встроенная функция в js bind, возвращает новую функцию и не будет ее вызывать */}
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
