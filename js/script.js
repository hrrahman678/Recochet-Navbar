var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// var cursor = document.querySelector(".cursor");
// var cursor2 = document.querySelector(".cursor2");

// document.addEventListener("mousemove",function(e){
//   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// })