/* var a = prompt ('Введите свой возраст')
    if (a<= 18 || a==18);{
    alert('Вы молоды,  Вам нужно учится')
    } */
   
 
    
/*  alert ('Что то пошло не так'); */

    
/* function checkAge(age){
    if(age >= 18){
        console.log(age + 'Вы молоды,  Вам нужно учится');
    }
     else if(18 >= 50) {
        console.log('Вам нужно работать');
    }
 
}
checkAge(17); */
var name 
var age 
var bool 
var und
/* Задание  1 */

var age = +prompt('Введите свой возраст')
console.log(age);

if(age <= 18 || age == 0) {
    alert('Вы молоды,  Вам нужно учится');
}else if(age <= 50){
    alert('Вам нужно работать');
}else if (age <= 59) {
    alert( 'Вам скоро на пенсию' );
}else if (age <= 100) {
    alert( 'Вам уже давно пора...!' );
}else 
{alert('Что-то пошло не так')} 


/*Задание 2  */


var num = +prompt('Введите  время')
switch (num) {
    case 0:
      alert(num + ' часов ночи ')
      break;
   case 1:
      alert(num + ' час ночи ')
   case 2:
   case 3:
   case 4:
      alert(num + ' часа ночи ')
   case 5:
   case 6:
      alert(num + ' часов ночи ')
      break;
   case 7:
   case 8:
   case 9:
   case 10:
      alert(num + ' часов утра ')
      case 11: 
      alert(num + ' часов утра')
      break;
      case 12: 
      alert(num + ' часов дня')
      break;
      case 13: 
      alert(  ' час дня')
      break;
      case 14: 
      alert(  ' часа дня')
      break;
      case 15: 
      alert(  '3 часов дня')
      break;
      case 16: 
      alert(  '4 часов дня')
      break;
      case 17: 
      alert(  '5 часов дня')
      break;
      case 18: 
      alert(  '6 часов вечера')
      break;
      case 19: 
      alert( '7 часов вечера')
      break;
      case 20: 
      alert( '8 часов вечера')
      break;
      case 21: 
      alert(  '9 часа вечера')
      break;
      case 22: 
      alert(  '10 часа вечера')
      break;
      case 23: 
      alert(  '11 часа ночи')
      break;
      case 24:
      alert( '12 часа ночи')
      break;
      default:
      alert('Введены неверные часы')

}

/* Задание 3 */

var a = +prompt('Введите три любых числа');
var b = +prompt('Введите три любых числа');
var c = +prompt('Введите три любых числа');

if (a > b && a < c || a < b && a > c) {
    alert('Среднее число ' + a )
} else if (b > a && b < c || b < a && b > c) {
    alert('Среднее число ' + b) 
} else if (c > a && c < b || c < a && c > b) {
    alert('Среднее число ' + c)
}

 else {
    alert('Не числа')
}
 

    


 

   






