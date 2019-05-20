
function updateStage(){
	var sOffset = (iCurrent*(-100)) + '%';
	var oSlides = document.querySelector('.slides');
	oSlides.style.left = sOffset;
}

function moveNext() {
	iCurrent++;

	if (iCurrent >= iTotal){
		iCurrent = iTotal - 1;
	}

	updateStage();

	var oCurrentDot = document.querySelector('.current-dot');
	

	if (oCurrentDot.nextElementSibling != null){
		oCurrentDot.classList.remove('current-dot');
		oCurrentDot.nextElementSibling.classList.add('current-dot');
		// oCurrentDot.parentNode.firstElementChild.classList.add('current-dot');
	}

	// else {
		
	// }
}

function movePrev() {
	iCurrent--;

	if (iCurrent < 0){
		iCurrent = 0;
	}

	updateStage();

	var oCurrentDot = document.querySelector('.current-dot');


	if (oCurrentDot.previousElementSibling != null){
		oCurrentDot.classList.remove('current-dot');
		oCurrentDot.previousElementSibling.classList.add('current-dot');
		// oCurrentDot.parentNode.lastElementChild.classList.add('current-dot');
	}
	// else {
	// 	
	// }

}

function moveTo() {
	iCurrent = parseInt(this.dataset.index);
	updateStage();

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');
	this.classList.add('current-dot');

}


//----- main body


//global state
var iTotal = 4;
var iCurrent = 0;

var oRight = document.querySelector('.fa-chevron-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-chevron-circle-left');
oLeft.addEventListener('click',movePrev);

var aDots = document.querySelectorAll('.dot');
for ( var i = 0;i<aDots.length; i++)
aDots[i].addEventListener('click',moveTo);

