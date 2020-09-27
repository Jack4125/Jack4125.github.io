'use strict';

(function() {
  const email = document.querySelectorAll('.email');
  const phone = document.querySelectorAll('.phone');

  const cryptOne = ['mai', 'l:', 'cba4125', '5-9603'];
  const cryptTwo = ['te', 'lto:', '(626) 21', '@outlook.com'];

  email.forEach(item => {
    item.innerHTML = `${cryptOne[2]}${cryptTwo[3]}`;
    item.href = `${cryptOne[0]}${cryptTwo[1]}${cryptOne[2]}${cryptTwo[3]}`;
  });
  phone.forEach(item => {
    item.innerHTML = `${cryptTwo[2]}${cryptOne[3]}`;
    item.href = `${cryptTwo[0]}${cryptOne[1]}${cryptTwo[2]}${cryptOne[3]}`;
  });
})();
