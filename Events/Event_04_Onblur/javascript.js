function changeColorBox0(){

    var oTextBox0 = document.querySelector('#textBox0');
    oTextBox0.parentNode.style.backgroundColor = oTextBox0.value;

    
}

function changeColorBox1(){

    var oTextBox1 = document.querySelector('#textBox1');
    oTextBox1.parentNode.style.backgroundColor = oTextBox1.value;
    
}

var oTextBox0 = document.querySelector('#textBox0');
oTextBox0.addEventListener('input',changeColorBox0);

var oTextBox1 = document.querySelector('#textBox1');
oTextBox1.addEventListener('input',changeColorBox1);