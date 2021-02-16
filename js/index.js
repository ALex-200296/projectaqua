$(document).ready(function () {

 $('#service').click(function(event) {
  $(this).children('button').children('ul').toggleClass('dropdown__service__list-active')
 })
 $('#service > button > ul > li').click(function(event) {
  event.stopPropagation()
  $(this).children('ul').toggleClass('dropdown__service__list2-active')
 })
});
