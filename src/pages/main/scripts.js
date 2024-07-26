//mobile-menu
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".navigation");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_open");
  menu.classList.toggle("navigation_open");
  body.classList.toggle("no-scroll");
})

//slider
const productSwiper = new Swiper('.product-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 32,
    }
  }
});

//favorites

let products = document.querySelector('.trends__products');
let productsInCart = [];

products.addEventListener('click', (e) => {
  let favoriteButton = e.target.closest('.product__favorite');
  if (favoriteButton) {
    favoriteButton.classList.toggle('product__favorite_active');
    let activeProduct = e.target.closest('.product');
    addProductToCart(activeProduct);
  }
})

function addProductToCart(product) {
  let productId = product.dataset.id;
  if (!productsInCart.includes(productId)) {
    productsInCart.push(productId)
  } else {
    let index = productsInCart.indexOf(productId);
    productsInCart.splice(index, 1);
  }
  let productsNumber = productsInCart.length;
  changeCounter(productsNumber)
}

function changeCounter(productsNumber) {
  let counterBlock = document.querySelector('.header__favorite-count');
  counterBlock.innerHTML = productsNumber
  if (productsNumber > 0) {
    counterBlock.classList.remove('header__favorite-count_hidden');
  } else {
    counterBlock.classList.add('header__favorite-count_hidden');
  }
}