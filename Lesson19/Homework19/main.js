// Функция для загрузки и отображения списка дел
async function loadTodos() {
    try {
        // Загружаем список  с сервера
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        // Обрезаем список до 10-15 элементов
        const limitedTodos = todos.slice(0, 15);

        // Преобразуем элементы списка
        const todoItems = limitedTodos.map(todo => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }));

        // Выводим элементы на страницу
        displayTodos(todoItems);
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}

// Функция для отображения списка дел на странице
function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');

    // Очищаем контейнер перед добавлением новых элементов
    todoList.innerHTML = '';

    // Добавляем каждый элемент как элемент списка
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.textContent = todo.title;

        // Добавляем класс, если задача выполнена
        if (todo.completed) {
            listItem.classList.add('completed');
        }

        todoList.appendChild(listItem);
    });
}

// Запускаем загрузку списка при загрузке страницы
document.addEventListener('DOMContentLoaded', loadTodos);