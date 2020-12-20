console.time("test");
let input = document.querySelector('#input');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let clear = document.querySelector('.clear');
let add = document.querySelector('.add');
let sub = document.querySelector('.sub');
let mul = document.querySelector('.mul');
let div = document.querySelector('.div');
let equal = document.querySelector('.equal');
let inputValue='';
one.addEventListener('click',function(){
  inputValue += '1';
  input.value = inputValue;
})
two.addEventListener('click',function(){
  inputValue += '2';
  input.value = inputValue;
})
three.addEventListener('click',function(){
  inputValue += '3';
  input.value = inputValue;
})
four.addEventListener('click',function(){
  inputValue += '4';
  input.value = inputValue;
})
five.addEventListener('click',function(){
  inputValue += '5';
  input.value = inputValue;
})
six.addEventListener('click',function(){
  inputValue += '6';
  input.value = inputValue;
})
seven.addEventListener('click',function(){
  inputValue += '7';
  input.value = inputValue;
})
eight.addEventListener('click',function(){
  inputValue += '8';
  input.value = inputValue;
})
nine.addEventListener('click',function(){
  inputValue += '9';
  input.value = inputValue;
})
zero.addEventListener('click',function(){
  inputValue += '0';
  input.value = inputValue;
})
clear.addEventListener('click',function(){
  inputValue = '';
  input.value = inputValue;
})
add.addEventListener('click',function(){
  inputValue += '+';
  input.value = inputValue;
})
sub.addEventListener('click',function(){
  inputValue += '-';
  input.value = inputValue;
})
mul.addEventListener('click',function(){
  inputValue += '*';
  input.value = inputValue;
})
div.addEventListener('click',function(){
  inputValue += '/';
  input.value = inputValue;
})
dot.addEventListener('click',function(){
  inputValue += '.';
  input.value = inputValue;
})
equal.addEventListener('click',function(){
  input.value = eval(inputValue);

})
console.timeEnd("test");
