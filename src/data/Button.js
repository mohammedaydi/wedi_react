import items from "./Items-list.js";
class Button {
  constructor(content, id) {
    this.content = content;
    this.id = id;
  }
}

var buttons = [];
buttons.push("all");
for (var i = 0; i < items.length; i += 1) {
  if (!buttons.includes(items[i].category)) {
    buttons.push(items[i].category);
  }
}
var filter_buttons = [];
buttons.forEach((button) => {
  const b = new Button(
    button.charAt(0).toUpperCase() + button.slice(1),
    button
  );
  filter_buttons.push(b);
});

export default filter_buttons;
