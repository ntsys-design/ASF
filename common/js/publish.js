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

$(window).scroll(function () {
  let scrTop = $(this).scrollTop()
  $('.ptr_sch_btn').on('click',function(e){
    e.preventDefault()
  $('.ptr_modal_box').fadeIn()
  $('.ptr_modal_box').css({'top' : scrTop + 'px'})
  // $('body').css({'overflow' : 'hidden'})
  })
  
  $('.close').on('click',function(){
  $('.modal_box').fadeOut()
  // $('body').css({'overflow' : 'scroll'})
  })

  $('.fcnum_sch_btn').on('click',function(e){
    e.preventDefault()
  $('.fcnum_modal_box').fadeIn()
  $('.fcnum_modal_box').css({'top' : scrTop + 'px'})
  // $('body').css({'overflow' : 'hidden'})
  })

  $('.nm_sch_btn').on('click',function(e){
    e.preventDefault()
  $('.nm_modal_box').fadeIn()
  $('.nm_modal_box').css({'top' : scrTop + 'px'})
  // $('body').css({'overflow' : 'hidden'})
  })
  
  



})

$('.tab_menu li').on('click',function(e){
  e.preventDefault()
  let idx=$(this).index()
  $('.tab_menu li').removeClass('on')
  $(this).addClass('on')
  $('.ptr_log').stop().hide()
  $('.ptr_log').eq(idx).stop().show()


})