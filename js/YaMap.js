// Создание скрипта для загрузки API
var script = document.createElement("script");
script.src =
  "https://api-maps.yandex.ru/2.1/?apikey=dff7b6ce-771b-4834-96fd-950461291922&lang=ru_RU";
script.async = true;
script.onload = function () {
  // Код, зависящий от загруженного API
  ymaps.ready(function () {
    var map = new ymaps.Map("map", {
      center: [47.214618, 38.930886],
      zoom: 17,
    });
    // Получаем ссылку на блок с классом ymaps-2-1-79-map
var mapBlock = document.querySelector('.ymaps-2-1-79-events-pane');

// Получаем ссылки на заголовок и параграф
var heading = document.querySelector('.map-heading');
var paragraph = document.querySelector('.map-routing');

mapBlock.appendChild(paragraph);// Встраиваем заголовок и параграф в блок с классом ymaps-2-1-79-map
mapBlock.appendChild(heading);

    // Создаем макет содержимого балуна
    var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="custom-balloon">' +
        '<button class="custom-balloon-close" title="Закрыть"></button>' +
        '<div class="custom-balloon-content">' +
        '<div class="custom-balloon-phone">' +
        '<img src="../src/images/icons/phone.svg" class="icon">' +
        '<div class="info">$[properties.phone]</div>' +
        "</div>" +
        '<div class="custom-balloon-email">' +
        '<img src="../src/images/icons/email.svg" class="icon">' +
        '<div class="info">$[properties.email]</div>' +
        "</div>" +
        '<div class="custom-balloon-address">' +
        '<img src="../src/images/icons/marker.svg" class="icon">' +
        '<div class="info">$[properties.address]</div>' +
        "</div>" +
        '<div class="custom-balloon-social">' +
        '<a href="https://telegram.com"><img src="../src/images/icons/icon-telegram.svg" class="icon"></a>' +
        '<a href="https://vk.com"><img src="../src/images/icons/icon-vk.svg" class="icon"></a>' +
        "</div>" +
        "</div>" +
        "</div>",
      {
        build: function () {
          // Вызываем родительский метод build
          customBalloonContentLayout.superclass.build.call(this);

          // Получаем ссылку на кнопку закрытия
          this._$closeButton = this.getElement().querySelector(
            ".custom-balloon-close"
          );

          // Назначаем обработчик клика на кнопку закрытия
          this._$closeButton.addEventListener(
            "click",
            this._onCloseClick.bind(this)
          );
        },
        clear: function () {
          // Удаляем обработчик клика на кнопку закрытия
          this._$closeButton.removeEventListener(
            "click",
            this._onCloseClick.bind(this)
          );

          // Вызываем родительский метод clear
          customBalloonContentLayout.superclass.clear.call(this);
        },
        _onCloseClick: function () {
          // Закрываем балун при клике на кнопку закрытия
          this.events.fire("userclose");
        },
      }
    );

    // Создаем метку с кастомной иконкой и балуном
    var placemark = new ymaps.Placemark(
      [47.214618, 38.930886],
      {
        phone: "+7 (4725) 43-97-20",
        email: "example@example.com",
        address: "Таганрог, ул.Петровская",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../src/images/icons/map-marker.svg",
        iconImageSize: [50, 50],
        iconImageOffset: [-30, -50],
        balloonShadow: false,
        balloonLayout: customBalloonContentLayout,
        balloonPanelMaxMapArea: 0,
        hideIconOnBalloonOpen: false,
      }
    );

    // Добавляем метку на карту
    map.geoObjects.add(placemark);

    placemark.events.add("click", function () {
      var balloon = placemark.balloon;
      if (!balloon.isOpen()) {
        balloon.open();
      }
    });

    // Обработчик события userclose для удаления балуна
    placemark.balloon.events.add("userclose", function () {
      map.balloon.close();
    });
    placemark.balloon.open();
  });
};

// Добавление скрипта на страницу
document.head.appendChild(script);
