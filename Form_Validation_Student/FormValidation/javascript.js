

function checkAlphabetic() {
    var isValid = false;
    var sValue = this.value;

    if (sValue == ''){
        this.nextElementSibling.innerHTML = 'Please fill in before proceeding';
        this.nextElementSibling.className = 'message-error';

    }
    
    else {
        // check alhpabetic
        var oAlphabeticExp = /^[A-Za-z]*$/;
        var bTest = oAlphabeticExp.test(sValue);

        if(bTest == false){
            // letters only
            this.nextElementSibling.innerHTML = 'Letters only & no spaces';
            this.nextElementSibling.className = 'message-error';
        }
        else{
            // thanks
            this.nextElementSibling.innerHTML = 'Thanks';
            this.nextElementSibling.className = 'message-success';
            isValid = true;
        }
    }
    return isValid;
}

function checkEmail(){
    var isValid = false;
    var sValue = this.value;

    if (sValue == ''){
        this.nextElementSibling.innerHTML = 'Please fill in your email before proceeding';
        this.nextElementSibling.className = 'message-error';

    }
    
    else {
        // check alhpabetic
        var oEmailExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        var bTest = oEmailExp.test(sValue);

        if(bTest == false){
            // letters only
            this.nextElementSibling.innerHTML = 'This is not a valid email';
            this.nextElementSibling.className = 'message-error';
        }
        else{
            // thanks
            this.nextElementSibling.innerHTML = 'Thanks';
            this.nextElementSibling.className = 'message-success';
            isValid = true;
        }
    }

    return isValid;
}

function checkAll(e) {

    var isFirstNameValid = checkAlphabetic.call(oFirstNameInput);
    var isLastNameValid = checkAlphabetic.call(oLastNameInput);
    var isEmailValid = checkEmail.call(oEmailInput);
    var isPasswordValid = checkAlphabetic.call(oPasswordInput);

    var isAllValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;
    if (isAllValid == false) {
        e.preventDefault();
    }
}

// main program
// var oFirstNameInput = document.querySelector('#firstName');
// oFirstNameInput.addEventListener('blur',checkFilled);

var oFirstNameInput = document.querySelector('#firstName');
oFirstNameInput.addEventListener('blur',checkAlphabetic);

var oLastNameInput = document.querySelector('#lastName');
oLastNameInput.addEventListener('blur',checkAlphabetic);

var oEmailInput = document.querySelector('#email');
oEmailInput.addEventListener('blur',checkEmail);

var oPasswordInput = document.querySelector('#password');
oPasswordInput.addEventListener('blur',checkAlphabetic);

var oForm = document.querySelector('#submit');
oForm.addEventListener('submit',checkAll);    




