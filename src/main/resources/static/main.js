const API_BASE = '/api/todos';

function fetchTodos() {
    fetch(API_BASE)
        .then(res => res.json())
        .then(todos => renderTodos(todos));
}

function addTodo(title) {
    fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false })
    })
    .then(res => res.json())
    .then(todo => renderTodo(todo));
}

function updateTodo(id, updated) {
    fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
    })
    .then(res => res.json())
    .then(todo => {
        const li = document.getElementById('todo-' + todo.id);
        if (li) {
            li.querySelector('span').textContent = todo.title;
            li.classList.toggle('completed', todo.completed);
            li.querySelector('input[type="checkbox"]').checked = todo.completed;
        }
    });
}

function deleteTodo(id) {
    fetch(`${API_BASE}/${id}`, {
        method: 'DELETE' })
    .then(() => {
        const li = document.getElementById('todo-' + id);
        if (li) li.remove();
    });
}

function renderTodos(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    console.log("asdfasd")
    todos.forEach(todo => {
        console.log("cakes");
        console.log(JSON.stringify(todo));
        let li = document.getElementById('todo-' + todo.id);
        if (!li) {
            li = document.createElement('li');
            li.id = 'todo-' + todo.id;
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} />
                <span></span>
                <button class="delete">Delete</button>
            `;
            list.appendChild(li);
        }
        li.querySelector('span').textContent = todo.title;
        li.classList.toggle('completed', todo.completed);
        li.querySelector('input[type="checkbox"]').checked = todo.completed;

        li.querySelector('input[type="checkbox"]').onchange = function () {
            updateTodo(todo.id, { title: todo.title, completed: this.checked });
        };
        li.querySelector('.delete').onclick = function () {
            deleteTodo(todo.id);
        };
        console.log(li)
    });
}

document.getElementById('todo-form').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = '';
    }
};

globalThis.onload = fetchTodos;