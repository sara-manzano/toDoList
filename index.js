// Tasks data
const tasks = [
  {
    description: 'Ir a hacer la compra',
    completed: false,
  },
  {
    description: 'Crear el archivo html',
    completed: true,
  },
  {
    description: 'Arreglar el coche',
    completed: false,
  },
  {
    description: 'Crear proyecto millonario',
    completed: false,
  },
  {
    description: 'Enlazar el archivo js al HTML',
    completed: true,
  },
  {
    description: 'Ir al gimnasio',
    completed: true,
  },
  {
    description: 'Tejer una camiseta',
    completed: false,
  },
  {
    description: 'Ir a comprar agua',
    completed: false,
  },
  {
    description: 'Fregar los platos',
    completed: true,
  },
];

// Render tasks in the DOM
const printTasks = (tasksToPrint) => {
  const ul = document.querySelector('.list');

  ul.innerHTML = '';

  for (let i = 0; i < tasksToPrint.length; i++) {
    const task = tasksToPrint[i];
    const li = document.createElement('li');
    li.textContent = task.description;
    li.addEventListener('click', () => completeTask(i));

    if (task.completed) {
      li.classList.add('completed');
    }

    ul.appendChild(li);
  }
};

// Sort tasks: pending first, then completed
const orderTasks = (tasksToOrder) => {
  tasksToOrder.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  printTasks(tasksToOrder);
};

// Initialize tasks on page load
orderTasks(tasks);

// Toggle task completion status
const completeTask = (i) => {
  tasks[i].completed = !tasks[i].completed;
  orderTasks(tasks);
};

// Add new task
const addTask = () => {
  const input = document.querySelector('.new > input');
  const newTask = {
    description: input.value,
    completed: false,
  };

  tasks.unshift(newTask);
  input.value = '';
  printTasks(tasks);
};

// Event listeners
const button = document.querySelector('.new > button');
button.addEventListener('click', addTask);
