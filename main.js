let search = Document.quaryselectorAll('.search-box');

document.querySelectorAll('#search -icon').onclick  = () =>{
 search.classList.toggle('active');
 cart.classList.remove('active');
 user.classList.remove('active');
}

let cart = Document.quaryselectorAll('.cart');

document.querySelectorAll('#cart-icon').onclick  = () =>{
 cart.classList.toggle('active');
 search.classList.remove('active');
 cart.classList.remove('active');
}

let user = Document.quaryselectorAll('.user');

document.querySelectorAll('#user-icon').onclick  = () =>{
 user.classList.toggle('active');
 search.classList.remove('active');
 cart.classList.remove('active');
}


// swiper
var swiper = new swiper(".new-arrival", {

 