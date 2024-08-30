let searchform = document.querySelector('.search-form');
let shippingcart = document.querySelector('.shipping-cart');
let navbar = document.querySelector('.navbar');
let loginform = document.querySelector('.login-form');
let searchbtn = document.querySelector('#searchBtn');
let cartbtn = document.querySelector('#cartBtn');
let userBtn = document.querySelector('#userBtn');
let menuBtn = document.querySelector('#menuBtn');

searchbtn.onclick = () => {
    searchform.classList.toggle('active');
    shippingcart.classList.remove('active');
    loginform.classList.remove('active');
}

cartbtn.onclick = () => {
    shippingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
}

userBtn.onclick = () => {
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shippingcart.classList.remove('active');
}

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('bx-x')
}


var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });