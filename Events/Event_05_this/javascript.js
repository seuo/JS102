
// Event Handler (function attached to event)
function changeColorBox(){

    // this means the object that triggers the event
    // this

    // var oTextBox0 = document.querySelector('#textBox0');
    this.parentNode.style.backgroundColor = this.value;

}

// main program

var oTextBox0 = document.querySelector('#textBox0');
oTextBox0.addEventListener('input',changeColorBox);

var oTextBox1 = document.querySelector('#textBox1');
oTextBox1.addEventListener('input',changeColorBox);

// var oTextBox1 = document.querySelector('#textBox1');
// oTextBox1.addEventListener('input',changeColorBox1);