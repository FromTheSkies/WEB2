const listInput = document.querySelector(".listinput");
const taskBox = document.querySelector(".list");

const items = [];

let index = 0;

function addElement() {
  const task = listInput.value.trim();

  if (task) {
    const item = {
      id: index,
      task: task,
      checked: false
    };

    items.push(item);

    const li = `
      <fieldset class="box">
        <li id="list">
          <input class="galochka" type="checkbox" id="item${item.id}" onchange="toggleChecked(${item.id})" ${item.checked ? "checked" : ""}>
          <p class="elem no ${item.checked ? "crossed" : ""}" id="cb${item.id}">${item.task}</p>
          <button class="trash" onclick="deleteItem(${item.id})">
            <img src="https://i.ibb.co/QPhd9LQ/delete.png" width="30" height="30">
          </button>
        </li>
      </fieldset>
    `;

    taskBox.insertAdjacentHTML("beforeend", li);

    listInput.value = "";

    index++;
  }
}

function display() {
  taskBox.innerHTML = items
    .map(item => `
      <fieldset class="box">
        <li id="list">
          <input class="galochka" type="checkbox" id="item${item.id}" onchange="toggleChecked(${item.id})" ${item.checked ? "checked" : ""}>
          <p class="elem no ${item.checked ? "crossed" : ""}" id="cb${item.id}">${item.task}</p>
          <button class="trash" onclick="deleteItem(${item.id})">
            <img src="https://i.ibb.co/QPhd9LQ/delete.png" width="30" height="30">
          </button>
        </li>
      </fieldset>
    `)
    .join("");
}

function deleteItem(id) {
  const index = items.findIndex(item => item.id === id);

  if (index !== -1) {
    items.splice(index, 1);
    display();
  }
}

function toggleChecked(id) {
  const index = items.findIndex(item => item.id === id);

  if (index !== -1) {
    items[index].checked = !items[index].checked;
    display();
  }
}
