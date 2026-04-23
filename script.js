//Hér er ég að skilgreina breytirnar fyrir todo litstann og teljarana
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");
const uncompletedCount = document.getElementById("uncompleted-count");

//
function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
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

// 4. Fall til að uppfæra tölfræði
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const uncompleted = total - completed;

  totalCount.innerText = total;
  completedCount.innerText = completed;
  uncompletedCount.innerText = uncompleted;
}
