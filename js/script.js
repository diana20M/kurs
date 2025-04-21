document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики для кнопок "Попробовать"
    const tryButtons = document.querySelectorAll('.w3-button.w3-green');
    tryButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Запуск онлайн-редактора...');
            // Здесь можно добавить код для открытия редактора
        });
    });
    
    // Анимация карточек при загрузке
    const cards = document.querySelectorAll('.w3-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
// Общие функции для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Анимация загрузки
    animateElements();
    
    // Обработчики для всех кнопок "Заказать"
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Заказать')) {
            button.addEventListener('click', function() {
                window.location.href = 'services.html#order';
            });
        }
    });
    
    // Поиск по сайту
    const searchInputs = document.querySelectorAll('input[placeholder="Поиск..."]');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Поиск: ' + this.value);
                // Здесь можно добавить реальный поиск
            }
        });
    });
});

function animateElements() {
    // Анимация карточек при загрузке
    const cards = document.querySelectorAll('.w3-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки "Смотреть полный урок"
    document.querySelectorAll('[onclick*="watchLesson"]').forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.getAttribute('data-course');
            alert(`Запуск полного урока по курсу "${courseName}". В реальном приложении здесь будет открытие видео плеера.`);
            // window.open('video-player.html?course=' + encodeURIComponent(courseName), '_blank');
        });
    });

    // Обработчик для кнопки "Показать все разделы"
    document.querySelectorAll('.show-all-sections').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            const sections = document.querySelectorAll(`.course-${courseId} .w3-accordion-content`);
            
            sections.forEach(section => {
                section.classList.add('w3-show');
            });
            
            alert(`Все разделы курса ${courseId} теперь отображены. В реальном приложении здесь может быть загрузка дополнительных уроков.`);
        });
    });

    // Обработчик для кнопки "Оставить отзыв"
    document.querySelectorAll('.add-review').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            const reviewForm = `
                <div class="w3-panel w3-light-grey w3-padding">
                    <h4>Оставить отзыв о курсе</h4>
                    <textarea class="w3-input w3-border" placeholder="Ваш отзыв..." rows="4"></textarea>
                    <div class="w3-margin-top">
                        <span>Оценка: </span>
                        <select class="w3-select w3-border" style="width:100px; display: inline-block;">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                    </div>
                    <button class="w3-button w3-blue w3-margin-top">Отправить</button>
                </div>
            `;
            
            this.insertAdjacentHTML('afterend', reviewForm);
        });
    });

    // Обработчик для кнопки "Начать курс"
    document.querySelectorAll('.start-course').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            if(confirm(`Вы хотите начать курс "${courseId}"?`)) {
                // В реальном приложении здесь будет редирект на первый урок
                window.location.href = `course-content.html?id=${encodeURIComponent(courseId)}&lesson=1`;
            }
        });
    });
});
function watchLesson() {
    // Получаем название курса из атрибута data-course
    const courseName = event.target.getAttribute('data-course');
    
    // Создаем модальное окно
    const modal = `
        <div id="videoModal" class="w3-modal" style="display:block">
            <div class="w3-modal-content w3-animate-opacity" style="max-width:800px">
                <div class="w3-container w3-blue">
                    <span onclick="document.getElementById('videoModal').style.display='none'" 
                          class="w3-button w3-display-topright">&times;</span>
                    <h3>${courseName}</h3>
                </div>
                <div class="w3-container w3-center w3-padding-16">
                    <div class="w3-light-gray" style="padding:56.25% 0 0 0;position:relative;">
                        <iframe src="https://player.vimeo.com/video/76979871" 
                                style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                                frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                    <p class="w3-left-align">Полная версия урока доступна после регистрации на курс</p>
                </div>
                <div class="w3-container w3-light-grey w3-padding-16">
                    <button class="w3-button w3-blue" onclick="document.getElementById('videoModal').style.display='none'">Закрыть</button>
                    <button class="w3-button w3-green start-course" data-course="${courseName}">Записаться на курс</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modal);
}