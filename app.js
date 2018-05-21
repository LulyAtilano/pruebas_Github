/* Métdos para seleccionar elementos del DOM (Nodos tipo 1) 
document.getElementById() // busca elementos por su ID
document.getElementsByTagName() // Colección de elementos HTML
document.getElementsByClassName() // Colección de elementos HTML
document.querySelector() // 1er elemento que cumpla la condición
document.querySelectorAll() // Todos los elementos que cumplan la condición
*/

/*
var title = document.getElementById('title');
console.log(title);
console.log(title.firstChild);

var linksList = document.getElementsByTagName('a');
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

var itemsList = document.getElementsByClassName('item');
console.log(itemsList);
console.log(itemsList[4]);
console.log(itemsList[4].firstElementChild);
console.log(itemsList[4].firstElementChild.firstChild);
*/

var title = document.querySelector('#title');
console.log(title);
console.log(title.firstChild);

var navbar = document.querySelector('#navbar');
console.log(navbar);

var item = document.querySelector('.item');
console.log(item);

var itemsList = document.querySelectorAll('.item');
console.log(itemsList);

