import React, { useRef } from "react";
//! передаем через интерфейс пропсы
interface TodoFormProps {
    onAdd(title: string): void
    //! void ничего не возвращает, супертип для типа  undefined .
}

const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  //! обрабатываем изменения инпута через useState и изменять локальный state
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //!   чтобы обратиться в event,  нужно указать тип
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  //!  событие для нажатия на Enter
  const keyUpHandle = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
      //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={handleChange}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        style={{color: "white"}}
        onKeyUp={keyUpHandle}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
