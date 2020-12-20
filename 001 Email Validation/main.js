var submit = document.getElementById('submit');
// submit.setAttribute('disabled','disabled');
// submit.removeAttribute('disabled');

var emailValidation = function(){
  var emailVal = document.getElementById('emailVal');
  var email = document.getElementById('email').value;

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    emailVal.classList.add('valid');
    emailVal.classList.remove('invalid');
    document.getElementById('emailCount').value = 1;
  }else{
    emailVal.classList.add('invalid');
    emailVal.classList.remove('valid');
    document.getElementById('emailCount').value = 0;
  }
}
function passwordValidation(){
  confirmPasswordValidation();
  var passwordVal = document.getElementById('passwordVal');
  var password = document.getElementById('password').value;

  var pattern = /^[^ ]{7,19}$/;
  if (password.match(pattern)) {
    passwordVal.classList.add('valid');
    passwordVal.classList.remove('invalid');
    document.getElementById('passwordCount').value = 1;
  }else{
    passwordVal.classList.add('invalid');
    passwordVal.classList.remove('valid');
    document.getElementById('passwordCount').value = 0;
  }
}
function confirmPasswordValidation(){

  var confirmPasswordVal = document.getElementById('confirmPasswordVal');
  var confirmPassword = document.getElementById('confirmPassword').value;
  var password = document.getElementById('password').value;
    if (password === confirmPassword) {
      confirmPasswordVal.classList.add('valid');
      confirmPasswordVal.classList.remove('invalid');
      document.getElementById('confirmPasswordCount').value = 1;
    }else{
      confirmPasswordVal.classList.add('invalid');
      confirmPasswordVal.classList.remove('valid');
      document.getElementById('confirmPasswordCount').value = 0;
    }



}
document.addEventListener("keyup", function(){
  var checkEmail = document.getElementById('emailCount').value;
  var checkPassword = document.getElementById('passwordCount').value;
  var checkConfirmPassword = document.getElementById('confirmPasswordCount').value;
  if(checkEmail==1 && checkPassword==1 && checkConfirmPassword==1){
    submit.removeAttribute('disabled');
    var btnsubmit = document.getElementById('btnsubmit');
      btnsubmit.classList.add('ac');
  }else{
    submit.setAttribute('disabled','disabled');
    var btnsubmit = document.getElementById('btnsubmit');
    btnsubmit.classList.remove('ac');
  }
});
// var checkEmail = document.getElementById('emailCount').value;
// console.log(checkEmail);
// var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
