let menuItems = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu");
let cache = menuItems[1];

menu.replaceChild(menuItems[2], menuItems[1]);
menu.insertBefore(cache, menuItems[3]);

let cache1 = document.createElement('li');
cache1.classList.add('menu-item');
cache1.textContent = "Пятый пункт";
menu.appendChild(cache1);


document.body.style.background = "url('img/apple_true.jpg') center no-repeat";


let title = document.querySelector("#title");
title.textContent = "Мы продаем только подлинную технику Apple";


let reklama = document.querySelector(".adv");
reklama.remove();


let q = prompt("Какое ваше отношение к технике Apple?", "ыыы");
let promptElem = document.querySelector("#prompt");
promptElem.textContent = q;
