document.addEventListener("DOMContentLoaded", function() {
    
// 1task

const age = prompt("Введите ваш возраст:");
if (age < 65) {alert ("Вам ещё рано на пенсию");} 
if (age>65) {alert("Поздравляем с пенсионным возрастом!");}

//2task

const login = prompt("Введите логин:");
const password = prompt("Введите пароль:");

if (login === "admin" && password === "12345") 
     {alert("Добро пожаловать!");} 
else {alert("Неверный логин или пароль");}

//3task

const secretNumber = 7;
const Guess = prompt('Угадай число'); 

if (Guess === secretNumber) { 
  alert('Вы угадали!');
  } 
  
else { 
  alert('Попробуйте ещё раз!');
}

















})