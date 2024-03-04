import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../app/TodoItemContext";

export default function TodoItem({ todoDate, todoName }) {
  const { deleteItem } = useContext(TodoItemContext);

  return (
    <div className="flex justify-center items-center gap-20 max-w-4xl mx-auto">
      <span className="text-xl">{todoName}</span>
      <span className="text-xl">{todoDate}</span>
      <button
        className="bg-red-400 px-3 py-2 rounded-md flex justify-center items-center gap-2"
        onClick={() => deleteItem(todoName)}
      >
        Delete <MdDelete size={22} />
      </button>
    </div>
  );
}
