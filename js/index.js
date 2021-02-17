$(document).ready(function () {

  $('.burger1').click(function () {
    if($('#svg1').hasClass('svg-active')) {
      $('#header__bottom__nav1').removeClass('header__bottom__nav-active')
      $('#svg1').removeClass('svg-active')
      $('#svg2').addClass('svg-active')
    } else {
      $('#header__bottom__nav1').addClass('header__bottom__nav-active')
      $('#svg2').removeClass('svg-active')
      $('#svg1').addClass('svg-active')
    }

  })

 $('#service').click(function(event) {
  $(this).children('ul').toggleClass('dropdown__service__list-active1')
  $(this).children('button').children('svg').toggleClass('header__bottom__svg-active')
 })
 $('#service > ul > li').click(function(event) {
  event.stopPropagation()
  $(this).children('ul').toggleClass('dropdown__service__list-active1')
 })

 $('#equipment').click(function(event) {
  $(this).children('ul').toggleClass('dropdown__service__list-active1')
  $(this).children('button').children('svg').toggleClass('header__bottom__svg-active')
 })
 $('#equipment > ul > li').click(function(event) {
  event.stopPropagation()
  $(this).children('ul').toggleClass('dropdown__service__list-active1')
 })

 $('#burger2').click(function () {
   $('#nav__header__mobile').addClass('header__top__nav__mobile-active')
 })
 $('#burger3').click(function () {
  $('#nav__header__mobile').removeClass('header__top__nav__mobile-active')
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