$('nav ul li a').on('click',function(){
$('nav ul li a').removeClass('active')
$(this).addClass('active')
})

$('.adm_menu ul li a').on('click',function(e){
  e.preventDefault()
  $('.adm_menu ul li a').removeClass('on')
  $(this).addClass('on')
  })

  $('.pagination ul li a').on('click',function(){
    
    $('.pagination ul li a').removeClass('active')
    $(this).addClass('active')
    })