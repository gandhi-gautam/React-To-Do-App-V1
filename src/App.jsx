import AppName from "./components/AppName";
import AddList from "./components/AddList";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const toDoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go To College",
      date: "4/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddList />
      <ToDoItems toDoItems={toDoItems} />
    </center>
  );
}

export default App;
