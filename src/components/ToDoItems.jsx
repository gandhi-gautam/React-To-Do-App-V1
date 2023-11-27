import ItemList from "./ItemList";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ toDoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {toDoItems.map((item) => (
          <ItemList itemName={item.name} itemDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
