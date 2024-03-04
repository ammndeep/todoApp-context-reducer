import { useContext, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemContext } from "../app/TodoItemContext";

export default function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");

  const handleItemName = (e) => {
    setItemName(e.target.value);
  };
  const handleItemDate = (e) => {
    setItemDate(e.target.value);
  };

  const handleAddItem = () => {
    addNewItem(itemName, itemDate);
    console.log(itemDate, itemName);
    setItemDate("");
    setItemName("");
  };

  return (
    <div className="flex justify-center items-center gap-10 bg-slate-200 max-w-3xl mx-auto p-5 rounded-xl mt-4">
      <input
        type="text"
        placeholder="Enter Todo Here"
        value={itemName}
        className=" p-2 border-black rounded-md text-black"
        onChange={handleItemName}
      />
      <input
        type="date"
        className="p-2 border-black rounded-md text-black"
        value={itemDate}
        onChange={handleItemDate}
      />
      <button
        className="bg-green-400 text-black px-3 py-2 flex justify-center items-center gap-2 rounded-md"
        onClick={handleAddItem}
      >
        Add <IoIosAddCircleOutline size={22} />
      </button>
    </div>
  );
}
