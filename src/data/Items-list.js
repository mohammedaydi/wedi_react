class Item {
  constructor(id, name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.id = id;
  }
}
const item1 = new Item(1, "Kinder", "food", "12");
const item2 = new Item(2, "KFC", "food", "25");
const item3 = new Item(3, "BMW", "car", "3");
const item4 = new Item(4, "cola", "food", "2");
const item5 = new Item(5, "fanta", "food", "2");
const item6 = new Item(6, "XL", "drink", "7");
var items = [];

items.push(item1);
items.push(item2);
items.push(item3);
items.push(item4);
items.push(item5);
items.push(item6);

export default items;
