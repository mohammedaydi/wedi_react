import Heading from "./components/Heading";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import items from "./data/Items-list";
import "./App.css";
import ItemsList from "./components/ItemsList";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setAllItems(() => {
      return [...items];
    });
    setFilteredItems(() => {
      return [...items];
    });
    console.log(items);
  }, []);
  return (
    <div className="App">
      <Heading />
      <Filter
        items={allItems}
        filter={filter}
        setFilter={setFilter}
        setFilteredItems={setFilteredItems}
      />
      <ItemsList
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
        filter={filter}
      />
    </div>
  );
}

export default App;
