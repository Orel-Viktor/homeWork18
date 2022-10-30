"use sctrict";

import "./style.css";
import $ from "jquery";

$(function () {
  const slideItems = $(".js--gal_item");
  const nextSlideBtn = $(".js--modal__next");
  const prevSlideBtn = $(".js--modal__prev");
  const modalContent = $(".js--modal__content");
  const closeModalBtn = $('.js--modal__close')
  
  slideItems.on("click", function () {
    $(".js--modal").addClass("active");
    showNewSlide($(this))
  });

  nextSlideBtn.on("click", function () {
    const currentItem = clearCurrentSlide();
    showNewSlide(currentItem.next().length ? currentItem.next() : $(slideItems[0]))
  });

  prevSlideBtn.on("click", function () {
    const currentItem = clearCurrentSlide();
    showNewSlide(currentItem.prev().length ? currentItem.prev() : $(slideItems[slideItems.length - 1]))
  })

  const clearCurrentSlide = () => {
    modalContent.empty();
    const currentItem = $(".current");
    currentItem.removeClass("current");
    return currentItem;
  }

  const showNewSlide = (item) => {
    item.addClass("current");
    const nextImage = item.find('img').clone();
    modalContent.append(nextImage);
  }
  
  closeModalBtn.on('click', function(){
    $(".js--modal").removeClass('active')
    clearCurrentSlide()
  })

});

