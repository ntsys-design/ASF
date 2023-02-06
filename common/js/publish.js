$('.gnb li a').on('click', function () {
  $('.gnb li a').removeClass('active')
  $(this).addClass('active')
})

$('.adm_menu li a').on('click', function (e) {
  e.preventDefault()
  $('.adm_menu li a').removeClass('on')
  $(this).addClass('on')
})

$('.pagination ul li a').on('click', function () {

  $('.pagination ul li a').removeClass('active')
  $(this).addClass('active')
})