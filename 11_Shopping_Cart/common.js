const btnCart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart ');
const productList = document.querySelector('.product-list');
const productItem = document.querySelectorAll('.product-item');
const cartCount = document.querySelector('.cart-count');
const cartList = document.querySelector('.cart-list');
const btnDelAll = document.querySelector('.btn-delAll');
const cartTotal = document.querySelector('.total');
let cartId = 0;
let total = 0;

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addCart(imgSrc, name, price) {
  const cartItem = document.createElement('li');
  cartItem.setAttribute('class', 'cart-item');
  cartItem.dataset.id = cartId;
  cartItem.innerHTML = `
  <img src="${imgSrc}" alt="${name}" class="cart-img" />
  <div class="cart-info">
    <strong class="cart-name">${name}</strong>
    <span class="cart-price">${price}</span>
  </div>
  <button class="btn-del" data-id="${cartId}"><i class="far fa-trash-alt"></i><span class="blind">삭제</span></button>
  `
  cartId++;
  return cartItem;
}

function addCount() {
  let count = cartCount.textContent;
  count++;
  cartCount.textContent = count;
}

function removeCart(target) {
  const targetId = target.closest('.btn-del').dataset.id;
  document.querySelector(`.cart-item[data-id="${targetId}"]`).remove();
  let count = cartCount.textContent;
  count--;
  cartCount.textContent = count;
}

function totalArr() {
  const cartPrice = document.querySelectorAll('.cart-price');
  const cartPriceArr = [];
  for (let i = 0; i < cartPrice.length; i++) {
    const price = cartPrice[i].textContent.split('원')[0].replace(/,/g, '') * 1;
    cartPriceArr.push(price);
  }
  return cartPriceArr;
}

function totalPrice() {
  total = 0;
  for (let i = 0; i < totalArr().length; i++) {
    total += totalArr()[i]
  }
  return numberWithCommas(total);
}

function resetCart() {
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }
}

function resetCount() {
  cartCount.textContent = 0;
}

productItem.forEach(function(elem, index){
  elem.dataset.index = index;
})

btnCart.addEventListener('click', function(){
  cart.classList.toggle('open');
});

productList.addEventListener('click', function(e){
  if(!e.target.closest('.btn-addCart')) return;
  const imgSrc = e.target.closest('.product-item').querySelector('img').getAttribute('src');
  const name = e.target.closest('.product-item').querySelector('.product-name').textContent;
  const price = e.target.closest('.product-item').querySelector('.product-price').textContent;
  addCount();
  cartList.appendChild(addCart(imgSrc, name, price));
  cartTotal.textContent = `${totalPrice()}`
});

cartList.addEventListener('click', function(e){
  total = 0;
  if(!e.target.closest('.btn-del')) return;
  removeCart(e.target);
  cartTotal.textContent = `${totalPrice()}`
});

btnDelAll.addEventListener('click', function(){
  total = 0;
  resetCart();
  resetCount();
  cartTotal.textContent = `${totalPrice()}`
});