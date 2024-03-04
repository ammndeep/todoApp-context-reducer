import { useContext } from "react";
import { TodoItemContext } from "../app/TodoItemContext";

export default function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemContext);

  return (
    todoItems.length === 0 && (
      <h1 className="text-5xl p-4 m-4 text-center font-medium">
        Enjoy your Day...!
      </h1>
    )
  );
}
