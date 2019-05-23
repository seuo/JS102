function addSpaces(sString){

    sString = removeSpaces(sString);
    var sNewString='';
    for (let i = 0; i < sString.length; i++) {
        sNewString += sString[i];
        if(i%4 == 3){
            sNewString+= ' ';
        }
        
    }

    return sNewString;
}

function removeSpaces(sString){

    return sString.replace(/\s/g, '');;
}


function checkAlpha(){
    var isValid = false;
    var sValue = this.value;


    if (sValue =='') {
        this.style.backgroundColor = 'rgb(249, 194, 213)';
        this.previousElementSibling.innerHTML = 'ENTER NAME';
        this.previousElementSibling.className = 'error';
    }
    else {
        var oAlpha = /^[a-zA-Z]*( [a-zA-Z]*)*( [a-zA-Z]*)?$/;
        var bCheck = oAlpha.test(sValue);

        if(bCheck == false){
            this.style.backgroundColor = 'rgb(249, 194, 213)';
            this.style.color = 'red';
            this.previousElementSibling.innerHTML = 'ENTER NAME';
            this.previousElementSibling.className = 'error';


        }
        else {
            this.style.backgroundColor = 'rgb(200, 255, 179)';
            this.previousElementSibling.innerHTML = '';
            this.previousElementSibling.className = '';
            this.style.color = 'green';
            isValid = true;
        }


    }
    return isValid;
}

function checkCardNum(){
    var isValid = false;
    var sValue = removeSpaces(this.value);

    if (sValue =='') {
        this.style.backgroundColor = 'rgb(249, 194, 213)';
    }

    else {

        var oCard = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
        var bCheck = oCard.test(sValue);
        
        if (bCheck == false){
            this.style.backgroundColor = 'rgb(249, 194, 213)';
            this.style.color = 'red';
            this.previousElementSibling.innerHTML = 'NUMBER INVALID';
            this.previousElementSibling.className = 'error';
        }

        else {
            this.previousElementSibling.innerHTML = '';
            this.previousElementSibling.className = '';
            this.style.backgroundColor = 'rgb(200, 255, 179)';
            this.style.color = 'green';
            isValid = true;
        }

    }

    
    return isValid;
}

function handleKeyPress(){
    this.value = addSpaces(this.value);
}
function checkMonth(){
    var sValue = this.value;

    if (sValue =='') {
        this.style.backgroundColor = 'rgb(249, 194, 213)';
    }
}

function checkYear(){
    var sValue = this.value;

    if (sValue =='') {
        this.style.backgroundColor = 'rgb(249, 194, 213)';
    }
}

function checkCvvNum(){
    var isValid = false;
    var sValue = this.value;

    if (sValue =='') {
        this.style.backgroundColor = 'rgb(249, 194, 213)';
    }

    else {

        var oCvv = /^([0-9]{3,4})$/;
        var bCheck = oCvv.test(sValue);
        
        if (bCheck == false){
            this.style.backgroundColor = 'rgb(249, 194, 213)';
            this.style.color = 'red';
            this.previousElementSibling.innerHTML = 'NUMBER INVALID';
            this.previousElementSibling.className = 'cvvErrorMessage';
        }

        else {
            this.style.backgroundColor = 'rgb(200, 255, 179)';
            this.previousElementSibling.innerHTML = '';
            this.previousElementSibling.className = 'cvvError';
            this.style.color = 'green';
            sValid = true;
        }

    }
    return isValid;
}

function checkAll(e){
    var isFnValid = checkAlpha.call(oFnInput);
    var isCnValid = checkCardNum.call(oCnInput);
    var isCvvValid = checkCvvNum.call(oCvvInput);
    var isMonthValid = checkMonth.call(oMonthInput);
    var isYearValid = checkYear.call(oYearInput);

    var isAllValid = isFnValid && isCnValid && isCvvValid && isMonthValid && isYearValid;

    if (isAllValid == false) {
        e.preventDefault();
    }
}

var oFnInput = document.querySelector('#fullName');
oFnInput.addEventListener('blur',checkAlpha);

var oCnInput = document.querySelector('#creditNumber');
oCnInput.addEventListener('blur',checkCardNum);
oCnInput.addEventListener('keypress',handleKeyPress);

var oCvvInput = document.querySelector('#cvvNumber');
oCvvInput.addEventListener('blur',checkCvvNum);

var oMonthInput = document.querySelector('#expMonth');
oMonthInput.addEventListener('blur',checkMonth);

var oYearInput = document.querySelector('#expYear');
oYearInput.addEventListener('blur',checkYear);

var oSubmit = document.querySelector('#submit');
oSubmit.addEventListener('click',checkAll); 