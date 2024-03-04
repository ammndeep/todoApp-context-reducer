import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemContext } from "../app/TodoItemContext";

export default function TodoItems() {
  const { todoItems } = useContext(TodoItemContext);
  console.log(todoItems);

  return (
    <div className=" flex justify-center items-center gap-10 mt-6 flex-col">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.date}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
}
