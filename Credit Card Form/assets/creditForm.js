function checkAlpha(){
    // console.log('hi')
    var sValue = this.value;
    // var isValid = false;

    if (sValue =='') {
        this.style.backgroundColor = 'rgba(255, 57, 57, 0.281)';
    }
    else {
        this.style.backgroundColor = 'rgb(200, 255, 179)';
    }

}

var oFnInput = document.querySelector('#fullName');
oFnInput.addEventListener('blur',checkAlpha);