import "./Item.css";

const Item = (props) => {
  return (
    <li>
      <div className="item">
        <div>
          <h2 id="name">{props.name}</h2>
          <h4>{props.category}</h4>
        </div>
        <div>
          <h3 id="price">{props.price}$</h3>
        </div>
      </div>
    </li>
  );
};

export default Item;
