 // Фильтрация задач по 
// Функция для добавления новой задачи
function addTask(taskText) {
    if (taskText.trim() !== '') { // Проверка, что текст задачи не пустой
        tasks.push({ text: taskText, isCompleted: false });
        taskInput.value = ''; // Очищаем поле ввода
        renderTasks();
    }
}
// Функция для переключения состояния задачи (выполнено/невыполнено)
function toggleTask(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks(); // Перерисовываем задачи
}
// Функция для фильтрации задач
function filterTasks(filterType) {
    renderTasks(filterType);
}
// События
createTaskBtn.addEventListener('click', () => addTask(taskInput.value));
filterAllBtn.addEventListener('click', () => filterTasks('all'));
filterCompletedBtn.addEventListener('click', () => filterTasks('completed'));
filterPendingBtn.addEventListener('click', () => filterTasks('pending'));
// Инициализация с рендерингом всех задач
renderTasks();