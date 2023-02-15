// $('.gnb li a').on('click', function () {
//   $('.gnb li a').removeClass('active')
//   $(this).addClass('active')
// })

// lnb
$('.lnb_wrap li a').on('click', function () {
  
  $('.lnb li a').removeClass('on')
  $(this).addClass('on')
})

// pagination
$('.pagination ul li a').on('click', function () {

  $('.pagination ul li a').removeClass('active')
  $(this).addClass('active')
})

// 모달 
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
// 순찰일지 관리 탭
$('.tab_menu li').on('click',function(e){
  e.preventDefault()
  let idx=$(this).index()
  $('.tab_menu li').removeClass('on')
  $(this).addClass('on')
  $('.ptr_log').stop().hide()
  $('.ptr_log').eq(idx).stop().show()


})

// 임시저장 버튼 클릭 탭 이동
$('.ch_list_btn').click(function(){
  
  let href=$(this).attr('href')
console.log(href)
$('.ptr_log').hide()
$(href).show()
$('.tab_menu li').removeClass('on')
$('.tab_menu li:nth-child(2)').addClass('on')
})

$('.phm_btn').click(function(){
  
  let href=$(this).attr('href')
console.log(href)
$('.ptr_log').hide()
$(href).show()
$('.tab_menu li').removeClass('on')
$('.tab_menu li:nth-child(3)').addClass('on')
})

$('.nm_list_btn').click(function(){
  
  let href=$(this).attr('href')
console.log(href)
$('.ptr_log').hide()
$(href).show()
$('.tab_menu li').removeClass('on')
$('.tab_menu li:nth-child(4)').addClass('on')
})