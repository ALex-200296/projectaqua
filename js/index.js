$(document).ready(function () {

 $('#service').click(function(event) {
  $(this).children('button').children('ul').toggleClass('dropdown__service__list-active')
 })
 $('#service > button > ul > li').click(function(event) {
  event.stopPropagation()
  $(this).children('ul').toggleClass('dropdown__service__list2-active')
 })
});

   // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [60.08259258995241,30.26536116633978],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18,
        })
        myMap.geoObjects.add(  new ymaps.Placemark([60.08259258995241,30.26536116633978], {
          iconLayout: 'default#image',
          iconImageHref: '../image/placeholder.svg',
          iconCaption: 'Выборское ш.,389, Санкт-Петербург ...',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42],
      },));
    }