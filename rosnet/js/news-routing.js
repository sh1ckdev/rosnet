// JavaScript

// Добавьте все карточки новостей в массив данных
const newsData = [
  {
    imageSrc: "../src/images/ImageNews1.png",
    date: "10 июня 2023",
    description: "05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "С 1 февраля 2022г меняется «Канал подарков». На кнопке 33 появится новый канал «Plan B».",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews1.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews1.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews2.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },
  {
    imageSrc: "../src/images/ImageNews3.png",
    date: "10 июня 2023",
    description: "«Роснэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
    link: "#"
  },

  // Добавьте остальные карточки новостей
];
const cardContainer = document.querySelector(".cardNews-container");
const paginationContainer = document.querySelector(".pagination");

// Количество карточек на одной странице
const cardsPerPage = 6;

// Функция для отображения карточек на странице
// Функция для отображения карточек на странице
function showCards(page) {
  // Добавьте класс "fade-out" к контейнеру карточек для плавного исчезновения
  cardContainer.classList.add("fade-out");

  // Задержка перед обновлением контейнера с карточками
  setTimeout(() => {
    // Очищаем контейнер с карточками
    cardContainer.innerHTML = "";

    // Вычисляем начальный и конечный индексы карточек для текущей страницы
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Получаем подмассив карточек для текущей страницы
    const pageCards = newsData.slice(startIndex, endIndex);

    // Создаем HTML для каждой карточки и добавляем их в контейнер
    pageCards.forEach((card) => {
      const cardHtml = `
        <div class="cardNews">
          <img src="${card.imageSrc}" alt="Фотография">
          <div class="cardNews-date">${card.date}</div>
          <div class="cardNews-description">${card.description}</div>
          <a class="cardNews-link" href="${card.link}">
            Подробнее
            <span class="arrow">&rarr;</span>
          </a>
        </div>
      `;
      cardContainer.innerHTML += cardHtml;
    });
    cardContainer.classList.remove("fade-out");
  }, 300);
}

// Функция для обработки клика на кнопку страницы
function handlePageClick(page) {
  // Удаляем класс "active" у текущей активной кнопки
  const activeButton = document.querySelector(".page-link.active");
  activeButton.classList.remove("active");

  // Добавляем класс "active" для нажатой кнопки
  const pageButton = document.getElementById("page-" + page);
  pageButton.classList.add("active");

  // Показываем карточки для выбранной страницы
  showCards(page);
}


// Функция для отображения кнопок страницы
// Функция для отображения кнопок страницы
function showPagination() {
  // Очищаем контейнер пагинации
  paginationContainer.innerHTML = "";

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(newsData.length / cardsPerPage);

  if (totalPages > 1) {
    // Создаем кнопки для каждой страницы
    for (let page = 1; page <= totalPages; page++) {
      const pageButton = document.createElement("button");
      pageButton.innerText = page;
      pageButton.classList.add("page-link");

      // Добавляем класс "active" для текущей страницы
      if (page === 1) {
        pageButton.classList.add("active");
      }

      // Добавляем обработчик события при клике на кнопку страницы
      pageButton.addEventListener("click", () => {
        // Удаляем класс "active" у текущей активной кнопки
        const activeButton = document.querySelector(".page-link.active");
        activeButton.classList.remove("active");

        // Добавляем класс "active" для нажатой кнопки
        pageButton.classList.add("active");

        // Показываем карточки для выбранной страницы
        showCards(page);
      });

      // Добавляем кнопку страницы в контейнер пагинации
      paginationContainer.appendChild(pageButton);
    }
  }
}

// Показываем первую страницу с карточками
showCards(1);
// Отображаем пагинацию
showPagination();
