import "./style.css";
import $ from "jquery";

$(function () {
  const slideItem = $(".js--gal_item");
  const nextSlideBtn = $(".js--modal__next");
  const modalContentImg = $(".js--modal__content img");

  const arrayAttr = [];
  slideItem.each(function () {
    arrayAttr.push($(this).find("img").attr("src"));
  });
  console.log(arrayAttr[2])

  slideItem.on("click", function () {
    const attr = $(this).find("img").addClass('current-slide').attr("src");
    $(".js--modal").removeClass("modal").addClass("modal-active");
    modalContentImg.attr("src", attr);


    nextSlideBtn.on("click", function () {
         
    });
  });
});
