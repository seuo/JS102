function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

function drawStars(){
	var oSelect = document.querySelector('#box');
	var sSelectValue = oSelect.value;

	var oAmount = document.querySelector('#stars');
	var sAmount = oAmount.value;
	var iStars = parseInt(sAmount);

	var oDiv = document.querySelector('#'+sSelectValue);
	oDiv.innerHTML = makeStars(iStars);

	// console.log(sSelectValue);
	// console.log(sAmount);
}

//---------------------------------------------

var oDrawButton = document.querySelector('#draw');
oDrawButton.addEventListener('click',drawStars);




