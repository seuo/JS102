function checkFilled() {
    var sValue = this.value;

    if (sValue == ''){
        this.nextElementSibling.innerHTML = 'Please fill in your name before proceeding';
        this.nextElementSibling.className = 'message-error';

    }else{
        this.nextElementSibling.innerHTML = 'Thanks';
        this.nextElementSibling.className = 'message-success';
    }
}

// main program
var oFirstNameInput = document.querySelector('#firstName');
oFirstNameInput.addEventListener('blur',checkFilled);

var oLastNameInput = document.querySelector('#lastName');
oLastNameInput.addEventListener('blur',checkFilled);

var oEmailInput = document.querySelector('#email');
oEmailInput.addEventListener('blur',checkFilled);

var oPasswordInput = document.querySelector('#password');
oPasswordInput.addEventListener('blur',checkFilled);
