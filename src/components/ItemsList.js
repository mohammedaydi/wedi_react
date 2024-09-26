import "./ItemsList.css";
import Item from "./Item";

const ItemsList = (props) => {
  return (
    <div className="items-container">
      <ul className="item-list" id="cont">
        {props.filteredItems.map((item) => (
          <Item
            className
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
