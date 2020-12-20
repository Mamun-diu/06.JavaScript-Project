var fnumber = document.querySelector('#fnumber');
var snumber = document.querySelector('#snumber');
var input = document.querySelector('#input');
var box = document.querySelector('.box');
var test = document.querySelector('#test');
var div = document.querySelector('#inputDiv');
var right = document.querySelector('.right');
var wrong = document.querySelector('.wrong');
var total = document.querySelector('.total');
var level = document.querySelector('.levelCheck');
var levelChecked = 2;
var rand1;
var rand2;
var inputbox;
var value = rand1 + rand2 ;
var rightCount = 0;
var wrongCount = 0;
var totalCount = 0;
var rightValue = 0;
var wrongValue = 0;

rand1 = Math.ceil(Math.random()*50+10);
rand2 = Math.ceil(Math.random()*50);
value = rand1 + rand2;
fnumber.innerHTML = rand1;
snumber.innerHTML = '+'+rand2;
snumber.style.marginLeft = '-25px';
if(rand2<10){
  snumber.style.marginLeft = '0px';
}

level.addEventListener('change',function(){
  if(level.value == 1){
    levelChecked = 1;
    rand1 = Math.ceil(Math.random()*9+10);
    rand2 = Math.ceil(Math.random()*9);
    value = rand1 + rand2;
    fnumber.innerHTML = rand1;
    snumber.innerHTML = '+'+rand2;
    snumber.style.marginLeft = '0px';
  }else if(level.value == 2){
    levelChecked = 2;
    rand1 = Math.ceil(Math.random()*50+10);
    rand2 = Math.ceil(Math.random()*50);
    value = rand1 + rand2;
    fnumber.innerHTML = rand1;
    snumber.innerHTML = '+'+rand2;
    snumber.style.marginLeft = '-25px';
  }else if(level.value == 3){
    levelChecked = 3;
    rand1 = Math.ceil(Math.random()*50+110);
    rand2 = Math.ceil(Math.random()*50+100);
    value = rand1 + rand2;
    fnumber.innerHTML = rand1;
    snumber.innerHTML = '+'+rand2;
    snumber.style.marginLeft = '-25px';
  }
});

input.addEventListener('keyup',check );
function check(){
  inputbox = input.value;
  if(inputbox == value){
    div.classList.remove('invalid');
    div.classList.add('valid');
    rightValue = 1;
    wrongValue = 0;
  }else{
    div.classList.remove('valid');
    div.classList.add('invalid');
    rightValue = 0;
    wrongValue = 1;
  }
}

input.addEventListener('keypress',function(event){
  if(input.value == ''){
    console.log('It is working');
    console.log(levelChecked);
  }else if(event.keyCode=='13'){
    input.value = null;
    if(levelChecked == 1){
      rand1 = Math.ceil(Math.random()*9+10);
      rand2 = Math.ceil(Math.random()*9);
      fnumber.innerHTML = rand1;
      snumber.innerHTML = '+'+rand2;
    }else if(levelChecked == 2){
      rand1 = Math.ceil(Math.random()*50+10);
      rand2 = Math.ceil(Math.random()*50);
      fnumber.innerHTML = rand1;
      snumber.innerHTML = '+'+rand2;
    }else if(levelChecked == 3){
      rand1 = Math.ceil(Math.random()*50+110);
      rand2 = Math.ceil(Math.random()*50+100);
      fnumber.innerHTML = rand1;
      snumber.innerHTML = '+'+rand2;
    }
    snumber.style.marginLeft = '-25px';
    if(rand2<10){
      snumber.style.marginLeft = '0px';
    }
    fnumber.innerHTML = rand1;
    snumber.innerHTML = '+'+rand2;
    value = rand1 + rand2;
    totalCount++;
    total.innerHTML = "Total = "+totalCount;
    if(rightValue==1){
      rightCount++;
      right.innerHTML = 'Right = '+rightCount;
      rightValue = 0;
    }else{
      wrongCount++;
      wrong.innerHTML = 'Wrong = '+wrongCount;
    }
  }
});
