'use sctrict'

import './style.css'
import $ from 'jquery'




$(function () {
  const gallery = $('.js--gallery')
  const slideItem = $('.js--gal_item')
  const nextSlideBtn = $('.js--modal__next')
  const modalContent = $('.js--modal__content')


  slideItem.on('click', function (event) {
    $(this).addClass('current')
    let currentSlide = event.target
    $('.js--modal').removeClass('modal').addClass('modal-active')
    const currentModalSlide = currentSlide.cloneNode()
    modalContent.append(currentModalSlide)
  })


  nextSlideBtn.on('click', function () {
    slideItem.closest('.current').next()
    console.log(slideItem)
  })
})































// const attr = $(this).find('img').attr('src')

// $('.js--modal').removeClass('modal').addClass('modal-active')
// // modalContentImg.attr('src' , attr)




// nextSlideBtn.on('click', function(){
// modalContentImg('src', )
// })