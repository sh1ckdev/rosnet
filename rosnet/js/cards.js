var isFirstTabOpen = false; // Флаг для отслеживания, была ли уже открыта первая вкладка

function changeTab(tabNumber) {
  // Получить текущую активную вкладку
  var activeTab = document.querySelector(".tab.active");

  // Если текущая вкладка совпадает с выбранной, ничего не делать
  if (activeTab === document.getElementsByClassName("tab")[tabNumber - 1]) {
    return;
  }

  // Скрыть текущие карточки с плавным затуханием
  var activeCards = document.querySelectorAll(".card-container .card.fade-in");
  for (var i = 0; i < activeCards.length; i++) {
    activeCards[i].classList.remove("fade-in");
    activeCards[i].classList.add("fade-out");
  }

  // Убрать активный класс у текущей вкладки
  activeTab.classList.remove("active");

  // Добавить активный класс к выбранной вкладке
  var clickedTab = document.getElementsByClassName("tab")[tabNumber - 1];
  clickedTab.classList.add("active");

  // Показать новые карточки с плавным появлением
  var newCards = document.getElementsByClassName("card tab" + tabNumber);
  for (var i = 0; i < newCards.length; i++) {
    newCards[i].style.display = "flex";
    newCards[i].style.opacity = "0";
    setTimeout(function (card) {
      card.classList.remove("fade-out");
      card.classList.add("fade-in");
      card.style.opacity = "1";
    }, i * 100, newCards[i]);
  }

  // Скрыть предыдущие карточки других вкладок
  var otherCards = document.querySelectorAll(
    ".card-container .card:not(.tab" + tabNumber + ")"
  );
  for (var i = 0; i < otherCards.length; i++) {
    otherCards[i].style.display = "none";
  }

  isFirstTabOpen = true; // Обновить флаг, что первая вкладка была открыта
}

document.addEventListener("DOMContentLoaded", function() {
  // По умолчанию активируем первую вкладку
  var defaultTab = document.getElementsByClassName("tab")[0];
  defaultTab.classList.add("active");
  isFirstTabOpen = true;

  // Показываем карточки первой вкладки
  var defaultCards = document.getElementsByClassName("card tab1");
  for (var i = 0; i < defaultCards.length; i++) {
    defaultCards[i].style.display = "flex";
    defaultCards[i].style.opacity = "1";
    defaultCards[i].classList.add("fade-in");
  }
});

function onTabClick(tabNumber) {
  if (tabNumber === 1 && isFirstTabOpen) {
    // Если первая вкладка уже открыта, ничего не делать
    return;
  }
  changeTab(tabNumber);
}

$(document).ready(function() {
  // Инициализация слайдера при мобильном разрешении
  if ($(window).width() < 768) {
    $('.card-container').slick({
      dots: true, // Отображение точек-индикаторов
      arrows: false, // Скрытие кнопок "Вперед" и "Назад"
      slidesToShow: 1, // Количество видимых карточек
      slidesToScroll: 1 // Количество карточек, прокручиваемых за один раз
    });
  }
});

// Переинициализация слайдера при изменении размеров окна
$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.card-container').slick('unslick'); // Удаление текущей настройки слайдера
    $('.card-container').slick({ // Инициализация слайдера с новыми настройками
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else {
    $('.card-container').slick('unslick'); // Удаление слайдера при разрешении больше 768px
  }
});

