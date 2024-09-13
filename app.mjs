let data = [];
let editIndex = -1;
let isEdit = false;

const container = document.querySelector(".container");
const todo = document.querySelector(".todo");

const deleteHandler = (index) => {
  data.splice(index, 1);
  renderData();
};

const editHandler = (index) => {
  todo.value = data[index];
  editIndex = index;
};

const renderData = () => {
  container.innerHTML = "";
  data.forEach((element, index) => {
    container.innerHTML += `
      <div class="flex justify-between items-center bg-yellow-200 p-2 mb-2 rounded">
        <p class="flex-1">${element}</p>
        <button onclick="editHandler(${index})" class="text-blue-500 hover:text-blue-700">
          <i class="fas fa-edit"></i>
          Edit
        </button>
        <button onclick="deleteHandler(${index})" class="text-red-500 hover:text-red-700 ml-2">
          <i class="fas fa-trash-alt"></i>
          Delete
        </button>
      </div>
    `;
  });
};

const addHandler = () => {
  const value = todo.value.trim();
  if (value === "") {
    alert("Todo cannot be empty!");
    return;
  }

  data.push(value);
  todo.value = "";
  renderData();
};

const submitHandler = () => {
  if (editIndex > -1) {
    data[editIndex] = todo.value.trim();
    editIndex = -1;
    todo.value = "";
    renderData();
  } else {
    addHandler();
  }
};

renderData();
