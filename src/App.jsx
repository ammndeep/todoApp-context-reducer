import { useContext } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TodoItemContext } from "./app/TodoItemContext";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  const { dark, handleToggleTheme } = useContext(TodoItemContext);
  return (
    <>
      <div
        className={` min-h-screen font-medium text-center ${
          dark ? "Dark-Mode" : "Light-Mode"
        }`}
      >
        <div className="flex justify-center items-center gap-10">
          <h1 className="text-4xl font-medium m-3">TODO List</h1>
          <button onClick={handleToggleTheme}>
            {dark ? (
              <BsFillMoonStarsFill size={24} />
            ) : (
              <MdOutlineLightMode size={24} />
            )}
          </button>
        </div>
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </>
  );
}
