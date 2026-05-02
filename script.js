let tasks = [
  { id: 1, title: "Finna töff titil font", done: false },
  { id: 2, title: "Fín pússa CSS", done: false },
  { id: 3, title: "Klára JS", done: false },
];

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");
const uncompletedCount = document.getElementById("uncompleted-count");

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.classList.add("todo-item");

    if (task.done) {
      li.classList.add("completed");
    }

    li.innerHTML = `
            <div class="task-info">
                <input type="checkbox" 
                       ${task.done ? "checked" : ""} 
                       onclick="toggleTask(${task.id})">
                <span>${task.title}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Eyða</button>
        `;

    todoList.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const uncompleted = total - completed;

  totalCount.innerText = total;
  completedCount.innerText = completed;
  uncompletedCount.innerText = uncompleted;
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Vinsamlegast skrifaðu eitthvað í reitinn!");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: todoInput.value,
    done: false,
  };

  tasks.push(newTask);
  todoInput.value = "";
  renderTasks();
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, done: !task.done };
    }
    return task;
  });
  renderTasks();
}

renderTasks();
