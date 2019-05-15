function moveNext(){


	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.nextElementSibling != null){
		oCurrent.nextElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.firstElementChild.classList.add('current');
	}

	//move the dot next
	var oCurrentDot = document.querySelector('.current-dot');
		oCurrent.classList.remove('current-dot');

		if (oCurrent.nextElementSibling != null) {
			oCurrentDot.nextElementSibling.classList.add('current-dot');
		}
		else {
			oCurrentDot.ParentNone.firstElementChild.classList.add('current-dot');
		}

}

function moveTo(){

	

	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	var sTarget = this.dataset.target;
	var oTarget = document.querySelector(sTarget);
	oTarget.classList.add('current');

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');

	this.classList.add('current-dot');

}

function movePrevious(){
	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.previousElementSibling != null){
		oCurrent.previousElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.lastElementChild.classList.add('current');
	}

	//move the dot next
	var oCurrentDot = document.querySelector('.current-dot');
		oCurrent.classList.add('current-dot');

		if (oCurrent.prevElementSibling != null) {
			oCurrentDot.prevElementSibling.classList.remove('current-dot');
		}
		else {
			oCurrentDot.prevElementSibling.classList.remove('current-dot');
		}

}

var oRight = document.querySelector('.fa-chevron-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-chevron-circle-left');
oLeft.addEventListener('click',movePrevious);

var oDots = document.querySelector('.dots');

for (var i = 0; i <oDots.children.length; i++) {
	oDots.children[i].addEventListener('click',moveTo);
}








