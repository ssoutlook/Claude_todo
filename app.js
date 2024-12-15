// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Initial render
renderTodos();

// Add event listener for Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (text) {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        saveTodos();
        renderTodos();
        input.value = '';
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function editTodo(id) {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    todoItem.classList.add('edit-mode');
    const input = todoItem.querySelector('.edit-input');
    input.focus();
}

function saveTodoEdit(id) {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    const input = todoItem.querySelector('.edit-input');
    const newText = input.value.trim();

    if (newText) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        });
        saveTodos();
        renderTodos();
    }
}

function cancelEdit(id) {
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        todoItem.setAttribute('data-id', todo.id);

        todoItem.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onclick="toggleTodo(${todo.id})">
            <span class="todo-text">${todo.text}</span>
            <div class="edit-container">
                <input type="text" class="edit-input" value="${todo.text}">
            </div>
            <div class="button-group">
                <button class="icon-btn edit-btn" onclick="editTodo(${todo.id})" title="Edit">✏️</button>
                <button class="icon-btn save-btn" onclick="saveTodoEdit(${todo.id})" title="Save">✔️</button>
                <button class="icon-btn cancel-btn" onclick="cancelEdit(${todo.id})" title="Cancel">✖️</button>
                <button class="icon-btn delete-btn" onclick="deleteTodo(${todo.id})" title="Delete">🗑️</button>
            </div>
        `;

        todoList.appendChild(todoItem);
    });
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}