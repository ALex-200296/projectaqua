const item = document.querySelectorAll('.pages__questions__item');
const asideItem = document.querySelectorAll('.aside__item');
const btn__services = document.querySelector('.pages__services5__wrapper4__btn');
const services__table1 = document.querySelector('.section__table1');
const services__table2 = document.querySelector('.section__table2');
const link = document.querySelectorAll('.reagent2__wrap2__link')

function toggleTable(button, table1, table2, classActive) {
  button.addEventListener('click', function() {
    if(table2.classList.contains(classActive)) {
      button.textContent = 'СВЕРНУТЬ ТАБЛИЦУ'
      table1.classList.add(classActive)
      table2.classList.remove(classActive)
    }else {
      button.textContent = 'РАЗВЕРНУТЬ ТАБЛИЦУ'
      table1.classList.remove(classActive)
      table2.classList.add(classActive)
    }
  });
}

$(document).ready(function () {
  let bolBurger2;
  let time;
  let time2;

  $('.burger1').click(function () {
    if($('#svg1').hasClass('svg-active')) {
      $('#header__bottom__nav1').removeClass('header__bottom__nav-active')
      $('#svg1').removeClass('svg-active')
      $('#svg2').addClass('svg-active')
    } else {
      $('#header__bottom__nav1').addClass('header__bottom__nav-active')
      $('#svg2').removeClass('svg-active')
      $('#svg1').addClass('svg-active')
      $('#nav__header__mobile').removeClass('header__top__nav__mobile-active')
    }

  })

 $('#service').click(function(event) {
  $('#equipment').children('ul').removeClass('dropdown__service__list-active1')
  $('#equipment').children('button').children('svg').removeClass('header__bottom__svg-active')

  clearTimeout(time)

  $(this).children('ul').toggleClass('dropdown__service__list-active1')
  $(this).children('button').children('svg').toggleClass('header__bottom__svg-active')
  
  if(screen.width >= 1000) {
    time = setTimeout(() => {
      $(this).children('ul').removeClass('dropdown__service__list-active1')
      $(this).children('button').children('svg').removeClass('header__bottom__svg-active')
    }, 7000)
  }
 })
 
 $('#equipment').click(function(event) {
  $('#service').children('ul').removeClass('dropdown__service__list-active1')
  $('#service').children('button').children('svg').removeClass('header__bottom__svg-active')

  clearTimeout(time2)

  $(this).children('ul').toggleClass('dropdown__service__list-active1')
  $(this).children('button').children('svg').toggleClass('header__bottom__svg-active')

  if(screen.width >= 1100) {
    time2 = setTimeout(() => {
      $(this).children('ul').removeClass('dropdown__service__list-active1')
      $(this).children('button').children('svg').removeClass('header__bottom__svg-active')
    }, 7000)
  }
 })
 $('#equipment > ul > li').click(function(event) {
  event.stopPropagation()
  $(this).children('ul').toggleClass('dropdown__service__list-active1')
  if(screen.width <= 1100) {
    $(this).children('div').children('svg').toggleClass('dropdown__service__item__wrap-active2')
  } else {
    $(this).children('div').children('svg').toggleClass('dropdown__service__item__wrap-active')
  }
 })

 $('#burger2').click(function () {
   $('#nav__header__mobile').addClass('header__top__nav__mobile-active')
 })
 $('#burger3').click(function () {
  $('#nav__header__mobile').removeClass('header__top__nav__mobile-active')
})

$(window).scroll(function (event) {
 if($(window).scrollTop() >= 500) {
  $('#nav__header__mobile').removeClass('header__top__nav__mobile-active')

  if($('#svg1').hasClass('svg-active')) {
    $('#header__bottom__nav1').removeClass('header__bottom__nav-active')
    $('#svg1').removeClass('svg-active')
    $('#svg2').addClass('svg-active')
  }
 }
});
});

// section__table__sevices
if(btn__services) {
  toggleTable(btn__services, services__table1, services__table2, 'section__table-active')
}

// form__choices
const element = document.querySelectorAll('.select');
element.forEach( (elem) => {
  const choices = new Choices(elem, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: ' ',
    
  });
  
})

//reagent 



//clean
$('.clean4__center__item').each(function(i) {
  const buttonOpen = this.children[0].children[0].children[0].children[1];
  const buttonClose = this.children[1].children[0].children[1]
  const div = this.children[1];

  buttonOpen.addEventListener('click', function() {
    div.style.display = 'block';
  })
  buttonClose.addEventListener('click', function() {
    div.style.display = 'none';
  })
})

//clean--end  

//pages__questions
item.forEach( function(i) {
  const li  = i.childNodes[1];
  const p = i.childNodes[3];
  li.addEventListener('click', () => {
    if(p.style.maxHeight) {
      p.style.maxHeight = null;
      if(p.style.maxHeight == 0) {
        p.style.marginTop = '0'
      }
    }else{
      p.style.maxHeight = p.scrollHeight + 'px';
      if(p.style.maxHeight == p.scrollHeight + 'px') {
        p.style.marginTop = '40px'
      }
    };
  });
});
//pages__questions--end
//aside
asideItem.forEach(function(i) {
  const btn = i.children[0]
  const ul = i.children[1]
  btn.addEventListener('click', ()=> {
    if(ul.style.maxHeight) {
      ul.style.maxHeight = null;
    }else{
      ul.style.maxHeight = ul.scrollHeight + 'px';
    };
  })
})

//aside--end

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