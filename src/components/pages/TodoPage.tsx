import React, { useEffect, useState } from 'react';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import ITodo from "../../interfaces";

const TodoPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved)
  }, []);


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
const toggleHandler = (id: number) => {  
  console.log(id)
      setTodos((prev) =>  
        prev.map((todo) => {  
          if (todo.id == id) {  
            console.log(todo.completed);  
            return {  
              ...todo,  
              completed: !todo.completed,  
            };  
          }  
          // console.log(todo)
          return todo;  
        })  
      );  
    };
    // console.log(todos);
    

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm("Вы уверены, что хотите удалить дело?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

    return <>
     <TodoForm onAdd={addHandler} />

<TodoList
  todos={todos}
  onToggle={toggleHandler}
  onRemove={removeHandler}
/>
    </>
};

export default TodoPage;