let countdownInterval;

function startCountdown() {
    // Получаем время
    const timeInput = document.getElementById('time-input');
    let time = parseInt(timeInput.value);

    // Проверяем
    if (isNaN(time) || time <= 0) {
        alert("Введите корректное количество секунд.");
        return;
    }

    // начальное значение
    displayTime(time);

    // Очищаем предыдущий таймер
    clearInterval(countdownInterval);

    // Запускаем таймер
    countdownInterval = setInterval(() => {
        time--;

        // Обновляем отображение времени
        displayTime(time);

        if (time <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-display').innerText = "Время вышло!";
            playSound();
        }
    }, 1000);
}

function displayTime(seconds) {
    // Вычисляем минуты и секунды
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('countdown-display').innerText =
        `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function playSound() {
    // Создаем и проигрываем звуковое оповещение
    const audio = new Audio('button-10.mp3');
    audio.play();
}