import { useState } from "react";
import { Item } from "./App";
 export default
  function PackingList({ item, onhandleDelete, onhandleUpdate, onhandleClear }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItem;
    if (sortBy === "input") sortedItem = item;
    if (sortBy === "description")
      sortedItem = item
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
      sortedItem = item.slice().sort((a, b) => Number(a.packed - b.packed));
  
  
  
    return (
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item
              item={item}
              onhandleUpdate={onhandleUpdate}
              onhandleDelete={onhandleDelete}
              onhandleClear={onhandleClear}
              key={item.id}
            />
          ))}
        </ul>
        <div className="action">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
            <option value="input">Sort by input order</option>
            <option value="description"> Sort by description</option>
            <option value="packed"> Sort by packed status</option>
          </select>
          <button onClick={()=>onhandleClear()}>Clear list</button>
        </div>
      </div>
    );
  }