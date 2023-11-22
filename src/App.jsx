import AppName from "./components/AppName";
import AddList from "./components/AddList";
import ItemList1 from "./components/ItemList1";
import ItemList2 from "./components/ItemList2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddList />
      <div className="items-container">
        <ItemList1 />
        <ItemList2 />
      </div>
    </center>
  );
}

export default App;
