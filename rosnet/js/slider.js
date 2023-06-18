// Получаем необходимые элементы DOM
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Определяем количество слайдов и текущий индекс
const slides = document.querySelectorAll('.cardsParnters');
const totalSlides = slides.length;
let currentIndex = 0;

// Функция для переключения на предыдущий слайд
function showPrevSlide() {
  if (currentIndex === 0) {
    return; // Не выполняем ничего, если это первый слайд
  }
  currentIndex--;
  updateSlider();
}

// Функция для переключения на следующий слайд
function showNextSlide() {
  currentIndex++;
  if (currentIndex === (totalSlides- 5)) {
    currentIndex = 0;
  }
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Назначаем обработчики событий для кнопок "Предыдущие" и "Следующие"
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Инициализация слайдера
updateSlider();
