import { useState } from "react";
import Logo from "./Logo"
import PackingList from "./Packinglist"
import Stats from "./Stats"
import Form from "./Form"
function App() {
  const [items, setNewItems] = useState([]);
  function handleItems(item) {
    setNewItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setNewItems((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdate(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearlist(){
    const confirm = window.confirm("Are you sure you want clear the list?");
   if (confirm) setNewItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onHandleItem={handleItems} />
      <PackingList
        item={items}
        onhandleUpdate={handleUpdate}
        onhandleDelete={handleDelete}
        onhandleClear ={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}



export   function Item({ item, onhandleDelete, onhandleUpdate }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onhandleUpdate(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <button onClick={() => onhandleDelete(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default App;
