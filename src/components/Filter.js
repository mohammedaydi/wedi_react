import filter_buttons from "../data/Button";
import "./Filter.css";

const Filter = (props) => {
  const filterHandler = (event) => {
    const filteredId = event.target.id;
    props.setFilter(filteredId);
    if (filteredId === "all") {
      props.setFilteredItems(() => {
        return [...props.items];
      });
    } else {
      props.setFilter(filteredId);
      console.log(filteredId);
      const arr = props.items.filter((item) => {
        return item.category === filteredId;
      });
      props.setFilteredItems(() => {
        return [...arr];
      });
    }
  };

  const colorHandler = (event) => {
    const cat = event.target.id;

    const itms = document.querySelectorAll(".item");

    for (var i = 0; i < itms.length; i += 1) {
      var itemCategory = itms[i].children[0].children[1].textContent;
      console.log(itemCategory);

      if (itemCategory === cat) {
        itms[i].classList.add("colored");
      } else {
        if (itms[i].classList.contains("colored")) {
          itms[i].classList.remove("colored");
        }
      }
    }
  };

  const removeColors = (event) => {
    const itms = document.querySelectorAll(".item");

    for (var i = 0; i < itms.length; i += 1) {
      if (itms[i].classList.contains("colored")) {
        itms[i].classList.remove("colored");
      }
    }
  };
  return (
    <div className="filter-box">
      <div className="filter-box__container">
        <div className="filter-box__title">
          <h1>Category Filter</h1>
        </div>
        <div className="filter-box__buttons" id="filterBtns">
          {filter_buttons.map((btn) => (
            <button
              key={btn.id}
              id={btn.id}
              onMouseLeave={removeColors}
              onClick={filterHandler}
              onMouseOver={colorHandler}
            >
              {btn.content}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
