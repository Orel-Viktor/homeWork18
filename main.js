import './style.css'
import $ from 'jquery'



// document.querySelector('.js-gal_item').addEventListener('click',function(){
//   console.log(2)
// })

$(function(){
  const slideItem =  $('.js--gal_item')
  const nextSlideBtn =$('.js--modal__next')
  
 

  const modalContentImg = $('.js--modal__content img' )
  slideItem.on('click',function(){
    const attr = $(this).find('img').attr('src')
    $('.js--modal').removeClass('modal').addClass('modal-active')
    modalContentImg.attr('src' , attr)
   


    nextSlideBtn.on('click', function(){
   
     
    })
  })

  
 

  
})